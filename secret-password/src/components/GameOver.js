import './GameOver.css'
import React from 'react'

const GameOver = ({reStartGame}) => {
  return (
    <div>GameOver
        <p> Click in the button to Restart </p>
        <button onClick={reStartGame}>Restart</button>
    </div>
  )
}

export default GameOver