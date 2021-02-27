import React from 'react'

function Register() {
    return (
        <div>
            <div className="card container" style={{width: "45rem", height: "25rem"}}>
            <div className="card-body" style={{marginTop: "35px"}}>
            <h5 className="card-title">Register</h5>
                <form>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="CoolUserName"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="StrongPassword"/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{float: "right"}}> Register </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register;
