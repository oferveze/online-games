import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';

import Board from './game/Board';
import GameFinished from './game/GameFinished';

function Main({username}) {
    const [flips, setFlips] = useState(0);
    const [pairsFound, setPairFound] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameKey, setGameKey] = useState(0);
    const [gamestarted, setGameStarted] = useState()

    const onFirstCardSelect = () => {
        setGameStarted(new Date());
    }

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

    const gameTime = () => Math.round((new Date() - gamestarted) / 1000);

    return (
        <Fragment>
            {!isGameOver && <div style={{textAlign: 'center'}}>
                <span>Playing as <strong>{username}</strong> </span>
                 Flips: <strong>{flips}</strong>  Pairs: <strong>{pairsFound}</strong>
            </div>}
            {isGameOver && <GameFinished onStartOver={onStartOver} username={username} flips={flips} game_time={gameTime()}/>}
            <Board key={gameKey} updateFlips={updateFlips} pairFound={pairFound} onGameFinished={onGameFinished} onFirstCardSelect={onFirstCardSelect}/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    username: state.authReducer.user.username
})

export default connect(mapStateToProps)(Main);
