import './GameOver.css'
import React from 'react'

const GameOver = ({reStartGame, score}) => {
  return (
    <div className='over'>
      <h1 data-text="Game..Over">Game..Over</h1> 
      <p> Your Score was: {score} </p>
      <button onClick={reStartGame}>Restart</button>
    </div>
  )
}

export default GameOver