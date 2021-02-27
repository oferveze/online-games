import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenticated, user } = this.props.authReducer;
        return (
            <nav className="navbar navbar-expand-lg navbar-light header">
                <Link to='/'>
                    <div className="navbar-brand">Memory Game</div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {isAuthenticated && <Link to='/game'>
                            <div className="nav-item nav-link" href="#">Play!</div>
                        </Link>}
                        <Link to='/leaderboard'>
                            <div className="nav-item nav-link" href="#">Leaderboard</div>
                        </Link>
                        <Link to='/contact'>
                            <div className="nav-item nav-link" href="#">Contact Us!</div>
                        </Link>
                        <div className="login-ctrl-header">
                            {isAuthenticated ? <Link to='/logout'>
                                <div className="nav-item nav-link" href="#">Logout<span className="sr-only">(current)</span></div>
                            </Link> :
                            <Link to='/logincontrol'>
                                <div className="nav-item nav-link" href="#">Login / Register<span className="sr-only">(current)</span></div>
                        </Link>}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps)(Header);
