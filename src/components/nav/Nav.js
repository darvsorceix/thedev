import React, {Component} from 'react';
import './Nav.scss';
import {NavLink} from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink data-hover="portfolio" to="portfolio"><span>Portfolio</span></NavLink>
                    </li>

                    <li>
                        <NavLink data-hover="contact" to="contact"><span>Contact</span></NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
