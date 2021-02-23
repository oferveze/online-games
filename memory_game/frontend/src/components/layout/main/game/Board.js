import React, { useState, useEffect } from 'react'

import Card from './Card';
import Deck from './Deck';

function Board({ updateFlips, pairFound, onGameFinished, startOver}) {
    const [deck, setDeck] = useState(Deck());
    const [prevCard, setPrevCard] = useState(null);

    function updateDeck(cardIdx, prop, value) {
        setDeck(deck => {
            return deck.map(card => {
                if (card.id === cardIdx) {
                    const newCard = {...card};
                    newCard[prop] = value;
                    return newCard;
                }

                return card;
            })
        });
    }

    useEffect(() => {
        const isGameFinished = deck.every(card => card.matched);
        if (isGameFinished) {
            onGameFinished()
        };
    }, [deck])

    function onCardSelect(card) {
        if (card.matched) {
            return;
        }

        updateFlips();
        updateDeck(card.id, "show", true);

        if (!prevCard) {
            setPrevCard(card);
            return;
        }

        if (card.id === prevCard.id) {
            updateDeck(card.id, "show", card.show);
            setPrevCard(null);
            return;
        }

        if (card.img === prevCard.img) {
            updateDeck(card.id, "matched", true);
            updateDeck(prevCard.id, "matched", true);
            setPrevCard(null);
            pairFound();
            return;
        }

        setTimeout(() => {
            updateDeck(prevCard.id, "show", false);
        }, 1000);

        setTimeout(() => {
            updateDeck(card.id, "show", false);
        }, 1300);

        setPrevCard(null);
    }

    return (
        <div className="board">
            {deck.map((card) => {
                return (
                    <Card key={card.id}
                          img={card.img}
                          isFacedUp={card.matched || card.show}
                          onCardSelect={() => onCardSelect(card)}/>
                )
            })}
        </div>
    );
}

export default Board;
