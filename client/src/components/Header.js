import React from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import Stripe from "./Stripe";

class Header extends React.Component {

    renderButton(){
        switch (this.props.auth){
            case null:
                return <li style={{margin: '0 10px'}}>authenticating..</li>
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return [
                    <li key='1'><Stripe /></li>,
                    <li key='2' style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key='3'><a href='/api/logout'>Logout</a></li>]
        }
    }

    render(){
        console.log(this.props.auth)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo" style={{margin: '0 15px'}}>Emailer</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderButton()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header)