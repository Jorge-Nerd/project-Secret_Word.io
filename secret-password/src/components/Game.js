import React from 'react'
import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>Game
         <p> Click in the button to verify the Letter</p>
        <button onClick={verifyLetter}>Start the Game</button>
    </div>
  )
}

export default Game