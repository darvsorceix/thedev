import React, {Component} from 'react';
import Logo from "../logo/Logo";
import Navigation from "../nav/Nav";
import {Route} from 'react-router-dom';

class Contact extends Component {

    render() {
        return (
            <div className="wrapper">
                <Route path="/" exact component={Logo}/>
                <Route path="/" exact component={Navigation}/>
            </div>
        )
    }
}

export default Contact;
