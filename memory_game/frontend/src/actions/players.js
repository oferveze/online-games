import axios from 'axios';
import { GET_PLAYERS } from './types';

export const getPlayers = () => dispach => {
    console.log("before axios");
    return axios.get('/players/')
    .then(respond => {
        console.log("in then", respond.data);
        dispach({
            type: GET_PLAYERS,
            payload: respond.data
        });
    })
    .catch(e => console.log(e));
}
