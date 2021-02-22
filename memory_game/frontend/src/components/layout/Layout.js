import React, { Component, Fragment } from 'react'

import Header from './header/Header'
import Main from './main/Main';

class Layout extends Component {
    constructor(props) {
        super(props);

        const session = {
            username: "",
            isLoggedIn: false,
            steps: 0
        };

        this.state = {session: session};
    }

    render() {
        return (
            <div className="layout">
                <Header session={this.session}/>
                <div className="container">
                    <Main session={this.session}/>
                </div>
            </div>
        )
    }
}

export default Layout;
