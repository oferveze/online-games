import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

export const loadUser = () => (dispatch, getState) => {
    const token = getState().authReducer.token;

    if (!token) {
        return;
    }

    dispatch({
        type: USER_LOADING
    });

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    };

    axios.get('auth/user', options)
    .then(respond => {
        dispatch({
            type: USER_LOADED,
            payload: respond.data
        });
    })
    .catch(e => {
        dispatch({
            type: AUTH_ERROR
        });

        console.log(e);
    });
}

export const login = (username, password) => dispatch => {
    dispatch({
        type: USER_LOADING
    });

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('auth/login', body, options)
    .then(respond => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: respond.data
        });
    })
    .catch(e => {
        dispatch({
            type: LOGIN_FAILED
        });
    });
}

export const logout = () => (dispatch, getState) => {
    const token = getState().authReducer.token;

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        options.headers['Authorization'] = `Token ${token}`;
    }

    const body = null // OMG

    axios.post('auth/logout', body, options)
    .then(() => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    })
    .catch(e => {
        console.log(e);
    });
}

export const register = (username, password) => dispatch => {
    dispatch({
        type: USER_LOADING
    });

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('auth/register', body, options)
    .then(respond => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: respond.data
        });
    })
    .catch(e => {
        dispatch({
            type: REGISTER_FAIL
        });

        console.log(e);
    });
}

export const getHttpTokenOptions = getState => {
    const token = getState().authReducer.token;

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        options.headers['Authorization'] = `Token ${token}`;
    }

    return options;
}
