import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth'
import {Redirect} from 'react-router-dom';

function Logout(props) {

    useEffect(() => {
        props.logout();
    }, [])
    return (
        <Redirect to="/" />
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
};


export default connect(null, mapDispatchToProps)(Logout);
