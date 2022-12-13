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

// Selecionar os stages
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessQty=3;

const App = () => {
  // Selecionar os stages
  const [gameStage, setGameStage] = useState(stages[0].name); // inicializa o gamestage como start
  const [words] = useState(wordsList)


  // Selecionar as palavras
  const[pickedWord, ssetPickedWord]=useState("");
  const[pickedCategory, setPickedCategory]=useState("");
  const[letters,setLetters]=useState([]) // array porque é uma lista de palavrass
  

  // Guessed Letters
  const[guessedLetters, setGuessedLetters]=useState([])
  const[wrongLetters, setWrongLetters]=useState([])
  const[guesses, setGuesses]=useState(guessQty)
  const[score, setScore]=useState(0)


  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()*Object.keys(categories).length)];
    
    console.log(categories)
    console.log(category)

    //Pick a random word
    const word = words[category][Math.floor(Math.random()*Object.keys(words[category]).length)]
    console.log(word);

    return{word, category} // desestruturando
  },[words]);


  // -- Start the Secret Password Game -- //
  const startGame=useCallback(()=>{

    // Clear guesses
    setGuesses(guessQty)
    // Clear all Letters
    clearLetterStages();

    // Picked Word and Category
    const {word, category} = pickedWordAndCategory();

    // Create a array of letters
    let wordLetters = word.toLowerCase().split("");
    // wordLetters = wordLetters.map((l)=> l.toLowerCase())

    console.log(wordLetters)
    console.log( category,word)

    // Fill States
    ssetPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);



    setGameStage(stages[1].name)
  },[pickedWordAndCategory] );

    // --  verifyLetter of the Secret Password Game -- //
  const verifyLetter=(letter)=>{
    console.log(letter);

    // Check if Letter has already been utilized
    const normalizezLetter = letter.toLowerCase();

    if(guessedLetters.includes(normalizezLetter) || wrongLetters.includes(normalizezLetter))
    {
      return ;
    } 

    // Remove a guess push a guesses letter

    if(letters.includes(normalizezLetter)){
      setGuessedLetters((actualGueesedLetter)=>[
        ...actualGueesedLetter, normalizezLetter
      ])
    }else{
      setWrongLetters((actualGueesedLetter)=>[
        ...actualGueesedLetter, normalizezLetter
      ]);
      setGuesses((actualGuesses)=> actualGuesses-1);
    }

  }

  const clearLetterStages = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }


  // If the number of guesses == 0 o should game over
  useEffect (()=>{
    if(guesses <= 0){

      // Reset all stages
      clearLetterStages();  // Clear 

      setGameStage(stages[2].name); // put to gameOver page
    }
  }, [guesses]);

  // Check WIN Condition
  useEffect(()=>{
    const uniqueLetter = [...new Set(letters)];
    console.log(uniqueLetter)

    // Win Condition

    if(guessedLetters.length === uniqueLetter.length && gameStage === stages[1].name){

      // Add Score
      setScore((actualScore)=>(actualScore += 100));
       
      // ResStart Game
      startGame();
    }

  },[guessedLetters, letters, startGame]);


  // Restart the Game
  const reStartGame=()=>{
    setScore(0);
    setGuesses(guessQty);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}          {/* se o estagio do jogo for start renderizar no ecran o StartScreen */}
      {gameStage === "game" && 
      <Game 
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}                   {/* se o estagio do jogo for game renderizar no ecran o Game */}
      {gameStage === "end" && 
      <GameOver 
        reStartGame={reStartGame} 
        score={score}
        />}                {/* se o estagio do jogo for end renderizar no ecran o GameOver */}
    </div>
  );
};

export default App;
