import React, { useState, useRef } from 'react'
import './Game.css'

const Game = ({verifyLetter,pickedWord, pickedCategory, letters, guessedLetters,wrongLetters,guesses,score}) => {
  
  const[letter, setLetter]=useState("");
  const letterInput=useRef(null);

  const handleSubmit=(e)=>{
    e.preventDefault();

    verifyLetter(letter)

    setLetter("");

    letterInput.current.focus();
  }
  
  return (
    <div className="game">
      <p className='points'>
        <span>Score: {score}</span>
      </p>
      <h1>Guess the Word</h1>
      <h3 className='tip'>
        Tip about the Word: <span> {pickedCategory}</span> 
      </h3>
      <p> You still have {guesses} trys</p>
      <div className="wordContainer">
        {letters.map((l, i)=>(
          guessedLetters.includes(l)?
          <span key={i} className='letter'>{l}</span>:
          <span key={i} className="blankSquare"></span>
        ))}
        
        
      </div>

      <div className="letterContainer">
        <p> Try to guess a letter of the word</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='letter' 
            maxLength='1' 
            required 
            onChange={(e)=>setLetter(e.target.value) } 
            value={letter}
            ref={letterInput} 
            />
          <button>Play!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p> Used Letters</p>
        {wrongLetters.map((l, i)=>(
          <span key={i}> {l} </span>
        ))}
      
      </div>
    </div>
  )
}

export default Game