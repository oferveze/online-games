import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { createPlayer } from '../../../../actions/players'

function GameFinished({onStartOver, createPlayer}) {

    const onSubmitScore = () => {
        console.log("submited score");
        createPlayer();
    };

    return (
        <Fragment>
            <h2>
                Well Done!
            </h2>
            {/* <h2>
                Game took you {} and you've done it in {} flips. <br />
            </h2>
            <a className="start-over-btn" onClick={onSubmitScore}>
                Submit your score?
            </a>
            <br /> */}
            <a className="start-over-btn" onClick={onStartOver}>
                Start Over?
            </a>
        </Fragment>
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
