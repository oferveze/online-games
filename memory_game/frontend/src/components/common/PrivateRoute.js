import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Router } from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, authReducer, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { props => {
                if (authReducer.isLoading) {
                    return <h1>Loading...</h1>
                } else if (!authReducer.isAuthenticated) {
                    return <Redirect to='/logincontrol'/>
                } else {
                    return <Component {...props}/>
                }
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    authReducer: state.authReducer
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
