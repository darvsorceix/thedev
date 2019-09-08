import React, {Component} from 'react';
import './NotFound.scss';
import Logo from "../logo/Logo";

class NotFound extends Component {

    render() {
        return (
            <div className="wrapper notFound">
                <Logo/>

                <article>
                    <header>404 Not Found</header>
                </article>
            </div>

        )
    }
}

export default NotFound;
