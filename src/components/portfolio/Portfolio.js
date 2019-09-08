import React, {Component} from 'react';
import './Portfolio.scss';

import composites from './assets/3a.png';
import royal from './assets/royal.png';
import thestylist from './assets/thestylist.jpg';
import loox from './assets/4loox.png';
import asdietetyk from './assets/asdietetyk.png';
import micramet from './assets/micramet.png';
import masterschool from './assets/masterschool.png';
import mamevent from './assets/mamevent.png';
import toyota from './assets/toyota.png';
import mak from './assets/mak.png';
import Logo from "../logo/Logo";

class Portfolio extends Component {

    render() {
        return (
            <div className="wrapper portfolio">
                <Logo/>

                <article>
                    <header>Portfolio</header>

                    <section>

                        <div className="grid">

                            <figure tabIndex={0}>
                                <img src={royal} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>Javascript</p>
                                        <p>Wordpress</p>
                                        <a className="link" rel="nofollow"
                                           href="http://thedev.pl/royal_wp/"><span>Demo</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={composites} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>Javascript</p>
                                        <p>Wordpress</p>
                                        <a className="link" rel="nofollow"
                                           href="http://3acompositesmobility.com"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={thestylist} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://intervi.pl/demo/thestylist"><span>Demo</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={loox} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://www.4loox.pl/"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={asdietetyk} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>Bootstrap</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://asdietetyk.pl"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={micramet} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://micramet.pl/"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={masterschool} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://masterschool.pl"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={mamevent} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://mamevent.pl"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={toyota} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JS + jQuery</p>
                                        <a className="link" rel="nofollow"
                                           href="http://wypozyczalnia.toyota.rzeszow.pl/"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure tabIndex={0}>
                                <img src={mak} alt="Portfolio project"/>
                                <figcaption>
                                    <div>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>Wordpress</p>
                                        <a className="link" rel="nofollow"
                                           href="http://makrzewy.pl/"><span>Online</span></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}

export default Portfolio;
