import React from 'react';
import Login from './Login';
import Register from './Register';

export default function LoginControll() {
    return (
        <div>
            <h1>Login/Register</h1>
            <div className="card text-center" style={{width: '60rem', margin: 'auto'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item active">
                            <a className="nav-link" data-toggle="tab" href="#register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#login">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content card-body">
                    <div id="register" className="tab-pane active">
                        <Register />
                    </div>
                    <div id="login" className="tab-pane">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}
