import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();
    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
    ]);
    expect(game.currentPlayer).toBe("X");
    expect(game.isTie()).toBe(false);
    expect(game.board.length).toBe(9);
  });

  it("should be able to to make move", () => {
    const game = new Game();

    game.onClick(0);
    expect(game.board).toEqual(["X", "-", "-", "-", "-", "-", "-", "-", "-"]);
    expect(game.currentPlayer).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("a player can take a field if not already taken", () => {
    const game = new Game();
    expect(game.currentPlayer).toBe("X");
    game.onClick(0);
    expect(game.currentPlayer).toBe("O");
    game.onClick(0);
    expect(game.board).toEqual(["X", "-", "-", "-", "-", "-", "-", "-", "-"]);
    expect(game.currentPlayer).toBe("O");
  });

  it("a game is over when all fields are taken", () => {
    const game = new Game();
    game.onClick(1); //x
    game.onClick(0); //o
    game.onClick(3); //x
    game.onClick(2); //o
    game.onClick(4); //x
    game.onClick(5); //o
    game.onClick(6); //x
    game.onClick(7); //o
    game.onClick(8); //x
    expect(game.board).toEqual(["O", "X", "O", "X", "X", "O", "X", "O", "X"]);
    expect(game.isTie()).toBe(true);
    expect(game.gameOver()).toEqual(true);
  });
  it("a game is over when all fields in a row are taken by a player", () => {
    const game = new Game();
    game.onClick(0); //x
    game.onClick(8); //o
    game.onClick(1); //x
    game.onClick(7); //o
    game.onClick(2); //x
    expect(game.board).toEqual(["X", "X", "X", "-", "-", "-", "-", "O", "O"]);
    expect(game.getWinner()).toEqual("X");
    expect(game.gameOver()).toEqual(true);
  });

  it("a game is over when all fields in a diagonal are taken by a player", () => {
    const game = new Game();
    game.onClick(0); //x
    game.onClick(6); //o
    game.onClick(4); //x
    game.onClick(7); //o
    game.onClick(8); //x
    expect(game.board).toEqual(["X", "-", "-", "-", "X", "-", "O", "O", "X"]);
    expect(game.getWinner()).toEqual("X");
    expect(game.gameOver()).toEqual(true);
  });
  it("a game is over when all fields in a column are taken by a player", () => {
    const game = new Game();
    game.onClick(0); //x
    game.onClick(8); //o
    game.onClick(3); //x
    game.onClick(7); //o
    game.onClick(6); //x
    expect(game.board).toEqual([
      "X", "-", "-", 
      "X", "-", "-", 
      "X", "O", "O"]);
    expect(game.getWinner()).toEqual("X");
    expect(game.gameOver()).toEqual(true);
  });
  it("a game can restart to empty board", () => {
    const game = new Game();
    game.onClick(0); //x
    game.onClick(8); //o
    game.onClick(3); //x
    game.onClick(7); //o
    game.restart();
    expect(game.board).toEqual(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  });
});
