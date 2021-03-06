import { GET_PLAYERS, DELETE_PLAYER } from '../actions/types.js';

const initialState = {
    players: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        case DELETE_PLAYER: {
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.payload)
            }
        }
        default:
            return state;
    }
}
