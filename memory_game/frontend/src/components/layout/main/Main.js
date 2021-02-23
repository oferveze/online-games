import React, { Fragment, useState } from 'react'
import Board from './game/Board';
import GameFinished from './game/GameFinished';

function Main() {
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
        console.log("Game Finished");
        setTimeout(() => {
            setIsGameOver(true);
        }, 1000);
    }

    const onStartOver = () => {
        console.log("Restarting game!");
        setIsGameOver(false);
        setGameKey(gameKey => gameKey + 1);
        setFlips(0);
        setPairFound(0);
    }

    return (
        <Fragment>
            <div style={{textAlign: 'center'}}> Flips: {flips}  Pairs: {pairsFound} </div>
            {isGameOver && <GameFinished onStartOver={onStartOver}/>}
            <Board key={gameKey} updateFlips={updateFlips} pairFound={pairFound} onGameFinished={onGameFinished}/>
        </Fragment>
    )
}

export default Main;
