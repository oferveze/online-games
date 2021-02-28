import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { createPlayer } from '../../../../actions/players'

function GameFinished({onStartOver, createPlayer, username, flips, game_time}) {
    const onSubmitScore = () => {
        createPlayer(username, flips, game_time);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>
                Well Done <strong>{username}</strong>!
            </h2>
            <h2>
                Game took you {game_time} seconds and you've done it in {flips} flips! <br />
            </h2>
            <a className="start-over-btn" onClick={onSubmitScore}>
                Submit your score?
            </a>
            <br />
            <a className="start-over-btn" onClick={onStartOver}>
                Start Over?
            </a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlayer: (username, flips, game_time) => {
            dispatch(createPlayer(username, flips, game_time))
        }
    }
};

export default connect(null, mapDispatchToProps)(GameFinished);
