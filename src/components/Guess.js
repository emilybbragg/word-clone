//packages
import React from 'react';

//library
import { range } from '../utils';
import { checkGuess } from "../game-helpers";


function Guess({ value, answer }) {

  const result = checkGuess(value, answer)

  const Cell = ({ letter, status }) => {
    return (
      <span className={`cell ${status}`} >
        {letter}
      </span>
    )
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}
export default Guess;