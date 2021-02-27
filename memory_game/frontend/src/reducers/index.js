import { combineReducers } from 'redux';
import playersReducers from './playersReducers'
import authReducer from './authentication'

export default combineReducers({
    playersReducers,
    authReducer
});
