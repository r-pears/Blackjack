import React from 'react';


/** Calculate the score for a single card. */

const getCardScore = (card) => {
  let value = card[0];
  if (value === "A") return 11;
  if (["0", "J", "Q", "K"].includes(value)) return 10;
  return +value;
}


/** Calculate the score for a hand. */

const getTotalScore = (cards) => {
  let total = 0;
  for (let card of cards) {
    total += getCardScore(card);
  }
  return total;
}


/** Component to display score */

const Score = (props) => {
  const score = getTotalScore(props.cards);

  return (
    <div>
      <h2>Score: {score}</h2>

      {score === 21 && <h4>🎉🎉🎉 BLACKJACK!!! 🎉🎉🎉</h4>}
    </div>
  );
}

export default Score;