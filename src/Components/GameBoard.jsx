import React from 'react';
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const[gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol; // or 'O', depending on the current player
      return updateBoard;
    })


    onSelectSquare(); // Call the function passed from the parent component
  }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="game-cell">
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );

};


