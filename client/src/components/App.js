import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import Translate from './Translate';
import TranslateNew from './translation/Translate';


class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render(){


        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/login' component={Login}/>
                     <div className='container'>
                            <Route exact path='/translate' component={Translate}/>
                            <Route exact path='/translate/new' component={TranslateNew}/>
                      </div>
                </BrowserRouter>
                </div>
        )
    }
}

export default connect(null, actions)(App)