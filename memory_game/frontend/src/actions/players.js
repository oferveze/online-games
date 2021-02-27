import axios from 'axios';
import { GET_PLAYERS, DELETE_PLAYER, CREATE_PLAYER } from './types';
import { getHttpTokenOptions } from '../actions/auth';

const PLAYERS_URL = '/players/';

export const getPlayers = () => dispach => {
    return axios.get(PLAYERS_URL)
    .then(respond => {
        dispach({
            type: GET_PLAYERS,
            payload: respond.data
        });
    })
    .catch(e => console.log(e));
}

export const deletePlayer = (id) => dispach => {
    return axios.delete(`${PLAYERS_URL}${id}`)
    .then(() => {
        dispach({
            type: DELETE_PLAYER,
            payload: id
        });

        return getPlayers()(dispach);
    })
    .then(getPlayers)
    .catch(e => console.log(e));
}

export const createPlayer = (username, flips, game_time) => (dispach, getState) => {
    const body = JSON.stringify({
        username,
        flips,
        game_time,
        owner: getState().authReducer.user.id
    });

    const options = getHttpTokenOptions(getState);

    return axios.post(PLAYERS_URL, body, options)
    .then((respond) => {
        dispach({
            type: CREATE_PLAYER
        });
    })
    .catch(e => console.log(e));
}

