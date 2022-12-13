import React from 'react'
import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1 data-text="Secret..Word">Secret..Word</h1>
        <p data-text="Click in the button to start Play"> Click in the button to start Play</p>
        <button onClick={startGame}>Start the Game</button>
    </div>
  )
}

export default StartScreen;