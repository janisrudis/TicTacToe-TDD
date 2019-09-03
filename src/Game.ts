export type XO = "X" | "O" | "-";

export class Game {
  currentPlayer: XO = "X";
  board: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  winner: XO = "-";
  getCells(): XO[] {
    return this.board;
  }

  getTurn(): XO {
    if (this.currentPlayer === "X") {
      return (this.currentPlayer = "O");
    } else if (this.currentPlayer === "O") {
      return (this.currentPlayer = "X");
    }
    return "-";
  }

  getWinner(): XO {
    //Rows
    if (this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
      return this.board[0];
    }
    if (this.board[3] === this.board[4] && this.board[4] === this.board[5]) {
      return this.board[3];
    }
    if (this.board[6] === this.board[7] && this.board[7] === this.board[8]) {
      return this.board[6];
    }
    //Colums
    if (this.board[0] === this.board[3] && this.board[3] === this.board[6]) {
      return this.board[0];
    }
    if (this.board[1] === this.board[4] && this.board[4] === this.board[7]) {
      return this.board[1];
    }
    if (this.board[2] === this.board[5] && this.board[5] === this.board[8]) {
      return this.board[2];
    }
    //Diagonals
    if (this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
      return this.board[0];
    }
    if (this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
      return this.board[2];
    }
    return "-";
  }

  isTie(): boolean {
    if (this.getWinner() === "X") {
      return false;
    }
    if (this.getWinner() === "O") {
      return false;
    }
    if (this.board.includes("-")) {
      return false;
    } else return true;
  }

  onClick(i: number) {
    if (!this.gameOver()) {
      if (this.getCells()[i] === "-") {
        this.getCells()[i] = this.currentPlayer;
        this.getTurn();
        return;
      } else return this.getCells()[i];
    } else return;
  }

  restart(): XO[] {
    this.currentPlayer = "X";
    return (this.board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  }

  gameOver(): boolean {
    if (this.isTie()) {
      return true;
    }
    if (this.getWinner() === "X") {
      return true;
    }
    if (this.getWinner() === "O") {
      return true;
    }
    return false;
  }
}
