import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReduccer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log(nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);

    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, dispatch] = useReducer(gameReduccer, initialState);
  // const action
  // const [state, setState] = useState({
  // board: Array(9).fill(null),
  // xIsNext: true,
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // setXIsNext((xIsNext) => !xIsNext);
    // setBoard(boardCopy);
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}

      <button className="reset-game" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
