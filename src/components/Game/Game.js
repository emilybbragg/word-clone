//packages
import React, { useState } from 'react';

//library
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

//components
import GuessInput from '../GuessInput';
import GameAlert from '../GameAlert';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [allGuesses, setAllGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState("running")

  const handleSubmitGuess = (currentGuess) => {
    const nextGuesses = [...allGuesses, currentGuess]
    setAllGuesses(nextGuesses)

    if (currentGuess.toUpperCase() == answer) {
      setGameStatus("won")
    } else if (nextGuesses?.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      <GuessResults
        allGuesses={allGuesses}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <GameAlert
          gameStatus={gameStatus}
          numOfGuesses={allGuesses?.length}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game;