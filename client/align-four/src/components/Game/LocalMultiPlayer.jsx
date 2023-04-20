import React from 'react';
import { useState } from 'react';
import GameWindow from './GameWindow';

function LocalMultiPlayer() {
    
    class Board {
        constructor() {
          this.board = new Array(7);
          for (let i = 0; i < 7; i++) {
            this.board.push(new Array(7).fill(0));
          }
        }

        boardToString() {
          let boardString = "";
          boardString = this.board.join("");
          boardString = boardString.replace(/,/g, "");
          return boardString;
        }
      
        visualizeBoard() {
          let boardString = this.boardToString();
      
          for (let i = 0; i < 7; i++) {
            console.log(boardString.slice(7 * i, 7 * i + 7));
          }
        }
      
        clearBoard() {
          for (let i = 0; i < 7; i++) {
            this.board[i].fill(0);
          }
        }
      
        playerMove(player, column) {
          for (let i = 6; i >= 0; i--) {
            if (this.board[i][column] === 0) {
              this.board[i][column] = player;
              break;
            }
          }
        }
      }

    const [player, setPlayer] = useState(1);
    const [gameBoard, setBoard] = useState(new Board());
  

    return (
        <div className=' bg-white h-screen w-full flex justify-center pt-10'>
        <GameWindow board={gameBoard}setBoard={setBoard} player={player} setPlayer={setPlayer}></GameWindow>

        </div>
    );
}

export default LocalMultiPlayer;