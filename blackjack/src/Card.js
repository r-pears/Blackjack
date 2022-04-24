import React from 'react';
import './Card.css';


/** Show a single card. */

const Card = (props) => {
  return (
    <img
      className="Card"
      src={`https://deckofcardsapi.com/static/img/${props.cardId}.png`}
      alt={`${props.cardId}`}
    />
  );
}

export default Card;
