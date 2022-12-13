import './GameOver.css'
import React from 'react'

const GameOver = ({reStartGame, score}) => {
  return (
    <div>
      <h1>GameOver</h1> 
      <p> Your Score was: {score} </p>
      <button onClick={reStartGame}>Restart</button>
    </div>
  )
}

export default GameOver