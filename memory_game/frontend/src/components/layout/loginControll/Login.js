import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../actions/auth';

function Login(props) {

    const onLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        props.login(username, password);
    }

    if (props.isAuthenticated) {
        return <Redirect to="/game" />
    }

    return (
        <div className="card container" style={{width: "45rem", height: "25rem"}}>
            <div className="card-body" style={{marginTop: "35px"}}>
            <h5 className="card-title">Login</h5>
                <form onSubmit={onLogin}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control" id="logusername" placeholder="CoolUserName"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" name="password" className="form-control" id="logpassword" placeholder="StrongPassword" autoComplete="on"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{float: "right"}}> Login </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
