import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header/Header'
import Main from './main/Main';
import Home from './home/Home';
import Contact from './contact/Contact';
import Leaderboard from './leaderboard/Leaderboard';
import Logout from './loginControll/Logout'
import LoginControll from './loginControll/LoginControll'
import PrivateRoute from '../common/PrivateRoute';

import { loadUser } from '../../actions/auth'

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            session: {
                username: "",
                isLoggedIn: false,
                steps: 0
            }
        };
    }

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        return (
            <Router>
                <div className="layout">
                    <Header session={this.state.session}/>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact render={(props) => <Home session={this.state.session} {...props}/>} />
                            <Route path="/logincontrol" exact render={(props) => <LoginControll session={this.state.session} {...props}/>} />
                            <Route path="/logout" exact render={(props) => <Logout session={this.state.session} {...props}/>} />
                            <PrivateRoute path="/game" exact component={Main} />
                            <Route path="/leaderboard" exact component={Leaderboard} />
                            <Route path="/contact" exact component={Contact} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    store: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: () => {
            dispatch(loadUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
