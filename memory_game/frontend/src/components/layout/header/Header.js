import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <Link to='/login'>
                            <div className="nav-item nav-link" href="#">Login <span className="sr-only">(current)</span></div>
                        </Link>
                        <Link to='/register'>
                            <div className="nav-item nav-link" href="#">Register</div>
                        </Link>
                        <Link to='/game'>
                            <div className="nav-item nav-link" href="#">Play!</div>
                        </Link>
                        <Link to='/leaderboard'>
                            <div className="nav-item nav-link" href="#">Leaderboard</div>
                        </Link>
                        <Link to='/contact'>
                            <div className="nav-item nav-link" href="#">Contact Us!</div>
                        </Link>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
