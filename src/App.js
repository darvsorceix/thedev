import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import NotFound from './components/NotFound/NotFound';

class App extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path={["/portfolio", "/projects", "/realizacje"]} exact component={Portfolio}/>
                    <Route path={["/contact", "/kontakt"]} exact component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
