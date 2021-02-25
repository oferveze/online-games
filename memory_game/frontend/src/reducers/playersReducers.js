import { GET_PLAYERS } from '../actions/types.js'

const initialState = {
    players: []
};

export default function(state = initialState, action) {
    console.log("in reducer: ", action.payload);
    switch(action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        default:
            return state;
    }
}
