import React from 'react'
import {Field} from 'redux-form'
import AutoLanguageInput from './AutoLanguageInput'
import MultipleLanguageInput from './MultipleLanguageInput'

const LanguageField = ({ fields, meta: { touched, error, submitFailed }}) => {

    return (
        <ul>
            <li>
            <button className='add-language-btn' type="button" onClick={() => fields.push({})}><i className="material-icons">add</i></button>
            {(touched || submitFailed) && error && <div className='error user_field_error'>{error}</div>}

            </li>
                {fields.map((language, index) => (
                    <li key={index}>
                        <button className='right delete-btn'
                        type="button"
                        title="Remove Language"
                        onClick={() => fields.remove(index)}
                        > <i className="material-icons">close</i></button>
                        <h4 className='language-title'>Language #{index + 1}</h4>
                            <div className='container'>
                                <Field
                                name={`${language}.title`}
                                type="text"
                                component={AutoLanguageInput}
                                label="Language"
                                />
                                <Field 
                                name={`${language}.translate`}
                                type="text"
                                component={MultipleLanguageInput}
                                />
                            </div>
                    </li>
                ))}
        </ul>
    )
    
}

export default LanguageField 