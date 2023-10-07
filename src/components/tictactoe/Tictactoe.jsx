import React, { useState } from 'react'
import Square from './Square'

function Tictactoe() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
//creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = 'Winner: ' + winner;
  }else{
    status = "Next player:" + (xIsNext ? "X" : "O");
  }

  return (
    
    <div className='border border-slate-600 bg-gray-400 ml-2 min-w-screen min-h-screen flex flex-col justify-center items-center cursor-pointer'>
      <div className='mb-2 text-lg'>{status}</div>
      <div className='border border-teal-800 '>
        <div className='board-row w-auto h-auto flex flex-row justify-center items-center '>
          <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
          <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
          <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
        </div>

        <div className='board-row w-auto h-auto flex flex-row justify-center items-center'>
          <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
          <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
          <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
        </div>

        <div className='board-row w-auto h-auto flex flex-row justify-center items-center'>
          <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
          <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
          <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
        </div>
      </div>      
    </div>
  )
}

export default Tictactoe
