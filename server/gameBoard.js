class Board {
  constructor() {
    this.board = [];
    for (let i = 0; i < 7; i++) {
      this.board.push(new Array(7).fill(0));
    }
  }

  //   get board() {
  //     return this.board;
  //   }

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

const game = new Board();

game.playerMove(1, 0);
game.playerMove(1, 1);
game.playerMove(1, 1);
game.clearBoard();
game.visualizeBoard();
