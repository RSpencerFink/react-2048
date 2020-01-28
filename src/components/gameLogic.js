import _ from 'lodash';

import { GameNode } from '../components';

const addNode = (board, numNodes, score) => {
  const newBoard = _.cloneDeep(board);
  const newNodes = [];
  while (newNodes.length < numNodes) {
    newNodes.push(
      score > 100
        ? Math.round(Math.random())
          ? new GameNode(4)
          : new GameNode(2)
        : new GameNode(2)
    );
  }
  while (newNodes.length) {
    let randomRow = Math.round(Math.random() * 3);
    let randomCol = Math.round(Math.random() * 3);
    if (!newBoard[randomRow][randomCol].value) {
      newBoard[randomRow][randomCol] = newNodes.pop();
    }
  }
  return newBoard;
};

const moveNode = (coords, board, direction) => {
  const [row, col] = coords;
  let value = board[row][col].value;
  if (!value) return board;
  switch (direction) {
    case 'up':
      for (let idx = row; idx >= 0; idx--) {
        if (board[idx - 1][col].value === value) {
          if (!board[idx - 1][col].merged && !board[idx][col].merged) {
            board[idx][col].value = 0;
            board[idx - 1][col].value = value * 2;
            board[idx - 1][col].merged = true;
            return board;
          }
        } else if (board[idx - 1][col].value === 0) {
          [board[idx][col], board[idx - 1][col]] = [
            board[idx - 1][col],
            board[idx][col]
          ];
        }
      }
      break;
    case 'down':
      for (let idx = row; idx < 3; idx++) {
        if (board[idx + 1][col].value === value) {
          if (!board[idx + 1][col].merged && !board[idx][col].merged) {
            board[idx][col].value = 0;
            board[idx + 1][col].value = value * 2;
            board[idx + 1][col].merged = true;
            return board;
          }
        } else if (board[idx + 1][col].value === 0) {
          [board[idx][col], board[idx + 1][col]] = [
            board[idx + 1][col],
            board[idx][col]
          ];
        }
      }
      break;
    case 'left':
      for (let idx = col; idx > 0; idx--) {
        if (board[row][idx - 1].value === value) {
          if (!board[row][idx - 1].merged && !board[row][idx].merged) {
            board[row][idx].value = 0;
            board[row][idx - 1].value = value * 2;
            board[row][idx - 1].merged = true;
            return board;
          }
        } else if (board[row][idx - 1].value === 0) {
          [board[row][idx], board[row][idx - 1]] = [
            board[row][idx - 1],
            board[row][idx]
          ];
        }
      }
      break;
    case 'right':
      for (let idx = col; idx < 3; idx++) {
        if (board[row][idx + 1].value === value) {
          if (!board[row][idx + 1].merged && !board[row][idx].merged) {
            board[row][idx].value = 0;
            board[row][idx + 1].value = value * 2;
            board[row][idx + 1].merged = true;
            return board;
          }
        } else if (board[row][idx + 1].value === 0) {
          [board[row][idx], board[row][idx + 1]] = [
            board[row][idx + 1],
            board[row][idx]
          ];
        }
      }
      break;
    default:
      break;
  }
  return board;
};

export { addNode, moveNode };
