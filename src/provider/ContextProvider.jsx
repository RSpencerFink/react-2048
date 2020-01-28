import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Context from '../config/Context';

import { GameNode } from '../components';
import { addNode, moveNode } from '../components/gameLogic';

var beep = new Audio('../assets/audio/beep.mp3');

const ContextProvider = props => {
  const { children } = props;

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [sound, setSound] = useState(false);
  const [gameBoard, setGameBoard] = useState([
    [new GameNode(0), new GameNode(0), new GameNode(0), new GameNode(0)],
    [new GameNode(0), new GameNode(0), new GameNode(0), new GameNode(0)],
    [new GameNode(0), new GameNode(0), new GameNode(0), new GameNode(0)],
    [new GameNode(0), new GameNode(0), new GameNode(0), new GameNode(0)]
  ]);

  useEffect(() => {
    initializeBoard();
  }, []);

  useEffect(() => {
    checkGameState();
  }, [gameBoard]);

  const toggleSound = () => {
    setSound(prev => !prev);
  };

  const initializeBoard = () => {
    setGameBoard(addNode(gameBoard, 2, score));
  };

  const checkGameState = () => {
    let acc = 0;
    let failed = true;
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        if (!gameBoard[row][col].value) failed = false;
        gameBoard[row][col].merged = false;
        acc += gameBoard[row][col].value;
      }
    }
    setGameOver(failed);
    setScore(acc);
  };

  const up = () => {
    let newBoard = _.cloneDeep(gameBoard);
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        newBoard = moveNode([row, col], newBoard, 'up');
      }
    }
    if (JSON.stringify(gameBoard) !== JSON.stringify(newBoard)) {
      newBoard = addNode(newBoard, 1);
      if (sound) beep.play();
      setGameBoard(newBoard);
    }
  };

  const down = () => {
    let newBoard = _.cloneDeep(gameBoard);
    for (let row = 3; row >= 0; row--) {
      for (let col = 0; col <= 3; col++) {
        newBoard = moveNode([row, col], newBoard, 'down');
      }
    }
    if (JSON.stringify(gameBoard) !== JSON.stringify(newBoard)) {
      newBoard = addNode(newBoard, 1);
      if (sound) beep.play();
      setGameBoard(newBoard);
    }
  };

  const left = () => {
    let newBoard = _.cloneDeep(gameBoard);
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        newBoard = moveNode([row, col], newBoard, 'left');
      }
    }
    if (JSON.stringify(gameBoard) !== JSON.stringify(newBoard)) {
      newBoard = addNode(newBoard, 1);
      if (sound) beep.play();
      setGameBoard(newBoard);
    }
  };

  const right = () => {
    let newBoard = _.cloneDeep(gameBoard);
    for (let row = 0; row <= 3; row++) {
      for (let col = 3; col >= 0; col--) {
        newBoard = moveNode([row, col], newBoard, 'right');
      }
    }
    if (JSON.stringify(gameBoard) !== JSON.stringify(newBoard)) {
      newBoard = addNode(newBoard, 1);
      if (sound) beep.play();
      setGameBoard(newBoard);
    }
  };

  return (
    <Context.Provider
      value={{
        ...props,
        gameBoard,
        up,
        down,
        left,
        right,
        score,
        gameOver,
        sound,
        toggleSound
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
