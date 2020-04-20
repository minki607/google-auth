
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys')
const Mailer = require('../service/Mailer')
const surveyTemplate = require('../service/emailTemplate/emailTemplate')

module.exports = app => {
    app.get('/api/surveys/complete',(req,res) => {
        res.send('Thanks for the survey')
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {title, subject, body, recipients } = req.body

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        })
        const mailer = new Mailer(survey, surveyTemplate(survey))

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -=1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err)
        }
    })

}