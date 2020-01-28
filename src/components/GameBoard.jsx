import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../config/Context';

const colors = {
  0: '#fff',
  2: 'blue',
  4: '#0066ff',
  8: '#00b9ff',
  16: '#00ffb8',
  32: '#00ff66',
  64: '#33ff00',
  128: '#ccff00',
  256: '#ffc800',
  512: '#ff7500',
  1024: '#ff4600',
  2048: '#ff0000'
};

const GameContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Score = styled.span`
  position: absolute;
  top: 64px;
  right: 64px;
  font-family: sans-serif;
`;

const GameCol = styled.div`
  width: 464px;
  height: 464px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #b5b5b5;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px #00000050;
`;

const GameRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Tile = styled.div`
  background-color: #fff;
  height: 100px;
  width: 100px;
  margin: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-family: sans-serif;
  color: ${props => (props.value > 0 ? '#fff' : 'transparent')};
  background-color: ${props => colors[props.value]};
  transition: background-color 0.1s ease;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const GameBoard = () => {
  const context = useContext(Context);
  const { gameBoard, up, down, left, right, score, gameOver } = context;

  const generateTiles = () => {
    return gameBoard.map((row, idx) => {
      return (
        <GameRow key={idx}>
          {row.map(el => {
            return (
              <Tile key={el.id} value={el.value}>
                <span>{el.value}</span>
              </Tile>
            );
          })}
        </GameRow>
      );
    });
  };

  const handleKeyPress = ({ key }) => {
    if (!gameOver) {
      switch (key) {
        case 'ArrowUp':
          up();
          break;
        case 'ArrowDown':
          down();
          break;
        case 'ArrowLeft':
          left();
          break;
        case 'ArrowRight':
          right();
          break;
        default:
          break;
      }
    }
  };

  return (
    <GameContainer tabIndex="0" onKeyDown={handleKeyPress}>
      <Score>{`SCORE: ${score}`}</Score>
      <GameCol>{generateTiles()}</GameCol>
    </GameContainer>
  );
};

export default GameBoard;
