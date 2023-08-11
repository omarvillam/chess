import GameSession from "../lib/session";

const testHistory = [
  {
    timer: {
      white: 600,
      black: 600,
    },
    position: "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
  },
  {
    timer: {
      white: 600,
      black: 600,
    },
    position: "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
  },
  {
    timer: {
      white: 600,
      black: 598,
    },
    position: "rnbqkbnr/pp1ppppp/8/2p5/8/4P3/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
  },
];

describe("Game session testing", function () {
  it("Move works", () => {
    const session = new GameSession();
    session.move({
      from: "h2",
      to: "h3",
    });

    expect(session.getPosition()).toBe(
      "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1"
    );
  });

  it("isFirstMove returns true in first move", () => {
    const session = new GameSession();
    expect(session.isFirstMove()).toBe(true);
  });

  it("isFirstMove returns false in second move", () => {
    const session = new GameSession();

    session.move({ from: "h2", to: "h3" });

    expect(session.isFirstMove()).toBe(false);
  });

  it("isGameOver returns true if white timer is zero", () => {
    const session = new GameSession();
    session.timer.white = 0;

    expect(session.isGameOver()).toBe(true);
  });

  it("Undo move works in a history with 3 moves", () => {
    const session = new GameSession();
    session.currentIndex = 2;
    session.history = testHistory;

    session.undo();

    expect(session.getPosition()).toBe(
      "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1"
    );
  });

  it("Redo works in a history with 3 moves", () => {
    const session = new GameSession();

    session.currentIndex = 1;
    session.history = testHistory;

    session.redo();

    expect(session.getPosition()).toBe(
      "rnbqkbnr/pp1ppppp/8/2p5/8/4P3/PPPP1PPP/RNBQKBNR w KQkq c6 0 2"
    );
  });

  it("Reset works", () => {
    const session = new GameSession();

    session.setTimer({ white: 500, black: 500 });
    session.currentIndex = 3;
    session.reset();

    expect(session.timer).toStrictEqual({ white: 600, black: 600 });
    expect(session.currentIndex).toBe(0);
    expect(session.getPosition()).toBe(
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" // Initial position
    );
  });

  it("getOrientation returns white on initial game", () => {
    const session = new GameSession();

    expect(session.getOrientation()).toBe("white");
  });

  it("setTimer works", () => {
    const session = new GameSession();

    session.setTimer({ white: 500, black: 500 });

    expect(session.timer).toStrictEqual({ white: 500, black: 500 });
  });
});
