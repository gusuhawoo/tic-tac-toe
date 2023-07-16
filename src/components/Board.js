import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setSIsNext] = useState(true);

  const calculateWinner = (squares) => {
    // 모든 승리할 수 있는 경우의 수 나열
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'x' : 'O'}`;
  }

  // const [number, setNumber] = useState(0);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    console.log('newSquares', newSquares);
    console.log('newSquares[i]', newSquares[i]);
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'x' : 'O';
    setSquares(newSquares);
    // setSIsNext(!xIsNext); // 첫번째방법 !true => false
    setSIsNext((prev) => !prev); // 두번째방법 previous State => !previous State

    // setSIsNext(!xIsNext);와 setSIsNext((prev) => !prev);의 사용시 차이점
    // 중복할 경우 두번째 방법은 전부 처리가 되지만 첫번째 방법은 하나만 처리가됨
    // setNumber(number + 1); // 첫번째방법
    // setNumber(number + 1); // 첫번째방법
    // setNumber((prev) => prev + 1); // 두번째방법
    // setNumber((prev) => prev + 1); // 두번째방법
    // console.log('number', number);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    // 부모컴포넌트 : props를 내려줌
  };

  return (
    <div>
      {/* {console.log('number2', number)} */}
      {/* 첫번째경우:중복임에도 1씩증가, 두번째경우:중복이므로 2씩증가 */}
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
