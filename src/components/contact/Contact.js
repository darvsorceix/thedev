import React, {Component} from 'react';
import './Contact.scss';
import Logo from "../logo/Logo";

class Contact extends Component {

    render() {
        return (
            <div className="wrapper">
                <Logo/>
                <header>Contact</header>

                <address>
                    <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#107;&#111;&#110;&#116;&#97;&#107;&#116;&#64;&#116;&#104;&#101;&#100;&#101;&#118;&#46;&#112;&#108;">
                        &#107;&#111;&#110;&#116;&#97;&#107;&#116;&#64;&#116;&#104;&#101;&#100;&#101;&#118;&#46;&#112;&#108;</a>
                </address>
            </div>
        )
    }
}

export default Contact;
