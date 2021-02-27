import axios from 'axios';
import { GET_PLAYERS, DELETE_PLAYER } from './types';

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
