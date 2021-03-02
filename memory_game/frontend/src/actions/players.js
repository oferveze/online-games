import axios from 'axios';
import { GET_PLAYERS, DELETE_PLAYER, CREATE_PLAYER } from './types';
import { getHttpTokenOptions } from '../actions/auth';

const PLAYERS_URL = '/players/';

export const getPlayers = () => dispatch => {
    return axios.get(PLAYERS_URL)
    .then(respond => {
        dispatch({
            type: GET_PLAYERS,
            payload: respond.data
        });
    })
    .catch(e => console.log(e));
}

export const deletePlayer = (id) => dispatch => {
    return axios.delete(`${PLAYERS_URL}${id}`)
    .then(() => {
        dispatch({
            type: DELETE_PLAYER,
            payload: id
        });

        return getPlayers()(dispatch);
    })
    .then(getPlayers)
    .catch(e => console.log(e));
}

export const createPlayer = (username, flips, game_time) => (dispatch, getState) => {
    const body = JSON.stringify({
        username,
        flips,
        game_time,
        owner: getState().authReducer.user.id
    });

    const options = getHttpTokenOptions(getState);

    return axios.post(PLAYERS_URL, body, options)
    .then(() => {
        dispatch({
            type: CREATE_PLAYER
        });
    })
    .catch(e => console.log(e));
}

