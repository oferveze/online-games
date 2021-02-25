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
import Leaderboard from './leaderboard/Leaderboard';

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
                        <Route path="/login" exact component={Home} />
                        <Route path="/register" exact component={Home} />
                        <Route path="/game" exact component={Main} />
                        <Route path="/leaderboard" exact component={Leaderboard} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Layout;
