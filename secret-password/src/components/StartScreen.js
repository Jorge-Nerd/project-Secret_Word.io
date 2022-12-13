import React from 'react'
import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p> Click in the button to start Play</p>
        <button onClick={startGame}>Start the Game</button>
    </div>
  )
}

export default StartScreen;