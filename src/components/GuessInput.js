//packages
import { React, useState } from "react";


const GuessInput = ({ handleSubmitGuess, gameStatus }) => {

  const [currentGuess, setCurrentGuess] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmitGuess(currentGuess)
    setCurrentGuess("")
  }

  const handleGuessInput = (e) => {
    const nextGuess = e.target.value.toUpperCase()
    setCurrentGuess(nextGuess)
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          minLength={5}
          maxLength={5}
          disabled={gameStatus !== "running"}
          value={currentGuess}
          onChange={handleGuessInput}
        />
      </form>
    </>
  )
}

export default GuessInput;