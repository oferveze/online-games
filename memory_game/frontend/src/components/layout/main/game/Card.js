import React from 'react'

function Card({isFacedUp, img, onCardSelect}) {
    const cardPath = `/static/frontend/assets/pictures/${img}`;
    const backCardPath = `/static/frontend/assets/pictures/back.png`;

    return (
        <div className="scene grid-item">
            <div className={`game-card ${isFacedUp ? 'is-flipped' : ''}`} onClick={onCardSelect}>
                <div className="card-face card-face-front">
                    <img src={cardPath} />
                </div>
                <div className="card-face card-face-back">
                    <img src={backCardPath} />
                </div>
            </div>
        </div>
    )
}

export default Card;


