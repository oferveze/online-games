import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';

import Board from './game/Board';
import GameFinished from './game/GameFinished';

function Main({username}) {
    const [flips, setFlips] = useState(0);
    const [pairsFound, setPairFound] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameKey, setGameKey] = useState(0);

    const updateFlips = () => {
        setFlips(flips => flips + 1);
    }

    const pairFound = () => {
        setPairFound(pairs => pairs + 1);
    }

    const onGameFinished = () => {
        setTimeout(() => {
            setIsGameOver(true);
        }, 1000);
    }

    const onStartOver = () => {
        setIsGameOver(false);
        setGameKey(gameKey => gameKey + 1);
        setFlips(0);
        setPairFound(0);
    }

    return (
        <Fragment>
            <div style={{textAlign: 'center'}}>
                <span>Playing as <strong>{username}</strong> </span>
                 Flips: <strong>{flips}</strong>  Pairs: <strong>{pairsFound}</strong>
            </div>
            {isGameOver && <GameFinished onStartOver={onStartOver}/>}
            <Board key={gameKey} updateFlips={updateFlips} pairFound={pairFound} onGameFinished={onGameFinished}/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    username: state.authReducer.user.username
})

export default connect(mapStateToProps)(Main);
