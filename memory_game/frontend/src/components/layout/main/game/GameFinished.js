import React from 'react'

function GameFinished({onStartOver}) {
    return (
        <a className="start-over-btn" onClick={onStartOver}>
            You Are amazing! Start Over?
        </a>
    )
}

export default GameFinished;
