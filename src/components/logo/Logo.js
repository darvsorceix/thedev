import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Logo.scss';

class Logo extends Component {

    render() {
        return (
            <NavLink to="/">
                <div className="logo animated flipInX">
                    The<span>dev</span>
                </div>
            </NavLink>
        )
    }
}

export default Logo;
