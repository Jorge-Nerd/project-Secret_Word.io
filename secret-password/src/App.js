//----------- Import CSS --------------//
import "./App.css";

//------------ Import React ----------//
import { useState, useEffect, useCallback } from "react";

//---------- Import the data words -------//
import { wordsList } from "./data/words";

// ---------Import Components --------//
import StartScreen from "./components/StartScreen";
import Game from './components/Game';
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name); // inicializa o gamestage como start
  const [words]=useState(wordsList)

  // -- Start the Secret Password Game -- //
  const startGame=()=>{
    setGameStage(stages[1].name)
  } 

    // --  verifyLetter of the Secret Password Game -- //
  const verifyLetter=()=>{
    setGameStage(stages[2].name)
  }

  const reStartGame=()=>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage == "start" && <StartScreen startGame={startGame}/>}          {/* se o estagio do jogo for start renderizar no ecran o StartScreen */}
      {gameStage == "game" && <Game verifyLetter={verifyLetter}/>}                   {/* se o estagio do jogo for game renderizar no ecran o Game */}
      {gameStage == "end" && <GameOver reStartGame={reStartGame} />}                {/* se o estagio do jogo for end renderizar no ecran o GameOver */}
    </div>
  );
};

export default App;
