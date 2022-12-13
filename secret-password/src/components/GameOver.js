import './GameOver.css'
import React from 'react'

const GameOver = ({reStartGame}) => {
  return (
    <div>
      <h1>GameOver</h1> 
      <p> Click in the button to Restart </p>
      <button onClick={reStartGame}>Restart</button>
    </div>
  )
}

export default GameOver