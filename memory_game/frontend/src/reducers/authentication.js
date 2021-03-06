import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const TOKEN_LOCAL_STORAGE_KEY = "token";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    token: localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY),
    user: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING: {
            return {
                ...state,
                isLoading: true
            };
        }
        case USER_LOADED: {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };
        }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS: {
            localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                // user: action.payload.data
            };
        }
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
        case LOGIN_FAILED:
        case AUTH_ERROR: {
            localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);

            return {
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isAuthenticated: false
            };
        }
        default:
            return state;
    }
}
