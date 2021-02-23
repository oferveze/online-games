import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './header/Header'
import Main from './main/Main';
import Home from './home/home';
import Contact from './contact/Contact';

class Layout extends Component {
    constructor(props) {
        super(props);

        const session = {
            username: "",
            isLoggedIn: false,
            steps: 0
        };

        this.state = {
            session: session
        };
    }

    render() {
        return (
            <Router>
                <div className="layout">
                    <Header session={this.session}/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/game" exact component={Main} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Layout;
