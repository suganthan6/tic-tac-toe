import { useState } from "react";
import calculateWinner from "./calculateWinner";

function Square({value, onSquareClick}) {
  return (
  <button 
    onClick={onSquareClick} 
    className="square"
  >
    {value}
  </button>
 );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status; 
  if(winner){ 
    status = "Congrats, " + winner + " is the winner."
  }
  else{
    status = (xIsNext ? "X" : "O") + "'s turn" ;
  }

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext ? "X" : "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    
  }

  function handleReset(){
    const emptyArray = Array(9).fill(null);
    setSquares(emptyArray);
    setXIsNext(true);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>     
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <div id="status"> {status}</div>
      </div>  
      <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

