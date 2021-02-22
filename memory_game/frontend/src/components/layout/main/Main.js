import React, { Fragment, useState } from 'react'
import Board from './game/Board';

function Main() {
    const [flips, setFlips] = useState(0);
    const [pairsFound, setPairFound] = useState(0);

    const updateFlips = () => {
        setFlips(flips => flips + 1);
    }

    const pairFound = () => {
        setPairFound(pairs => pairs + 1);
    }

    return (
        <Fragment>
            <div style={{textAlign: 'center'}}> Flips: {flips}  Pairs: {pairsFound} </div>
            <Board updateFlips={updateFlips} pairFound={pairFound}/>
        </Fragment>
    )
}

export default Main;
