import React from 'react';
import CardList from './CardList';
import Score from './Score';
import './BlackjackGame.css';


/** Get a random element from an array. */

const choice = (values) => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}


/** Get a random value, suit combination from card data. */

const getCard = (values, suits) => {
  const randomValue = choice(values);
  const randomSuit = choice(suits);
  return randomValue + randomSuit;
}


/** Get numCards random cards, with no duplicates. */

const getCards = (values, suits, numCards = 1) => {
  const cardsArray = [getCard(values, suits)];
  while (cardsArray.length < numCards) {
    let randomCard = getCard(values, suits);
    if (!cardsArray.includes(randomCard)) cardsArray.push(randomCard);
  }

  return cardsArray;
}


/** Main game component. */

const BlackjackGame = (props) => {
  const pairOfCards = getCards(props.values, props.suits, 2);

  return (
    <div className='BlackjackGame'>
      <CardList cards={pairOfCards} />
      <Score cards={pairOfCards} />
    </div>
  );
}


/** Default props */

BlackjackGame.defaultProps = {
  values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
  suits: ["C", "D", "H", "S"]
};

export default BlackjackGame;
