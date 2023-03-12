//packages
import React from "react";

//library
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

//components
import Guess from "../Guess";


const GuessResults = ({ allGuesses, answer }) => {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={allGuesses[num]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults;