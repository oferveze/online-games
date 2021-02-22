import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light header">
                <a className="navbar-brand" href="#">Memory Game</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Register</a>
                    <a className="nav-item nav-link" href="#">Leaderboard</a>
                    <a className="nav-item nav-link" href="#">Contact Us!</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
