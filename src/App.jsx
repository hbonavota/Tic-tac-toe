import { useState } from "react"

import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });
    setGameTurns((prevTurns) => {
      return [...prevTurns, activePlayer];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div >
      <Log />
    </main >
  )
}

export default App
