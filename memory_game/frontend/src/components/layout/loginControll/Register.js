import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../../actions/auth';

function Register(props) {

    const onRegister = (e) => {
        e.preventDefault();
        const username = e.target.regusername.value;
        const password = e.target.regpassword.value;
        props.register(username, password);
    }

    if (props.isAuthenticated) {
        return <Redirect to="/game" />
    }

    return (
        <div>
            <div className="card container" style={{width: "45rem", height: "25rem"}}>
            <div className="card-body" style={{marginTop: "35px"}}>
            <h5 className="card-title">Register</h5>
                <form onSubmit={onRegister}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" name="regusername" className="form-control" id="regusername" placeholder="CoolUserName"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label"> Password </label>
                        <input type="password" name="regpassword" className="form-control" id="regpassword" placeholder="StrongPassword" autoComplete="on"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{float: "right"}}> Register </button>
                </form>
            </div>
        </div>
        </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
