import { render, screen, cleanup } from "@testing-library/react";
import Board from "../components/board";
import Controls from "../components/controls";
import Header from "../components/header";
import GameSession from "../lib/session";

describe("React components are being rendered", function () {
  afterEach(() => {
    cleanup();
  });

  it("Header component is rendering properly", () => {
    const game = new GameSession();
    render(<Header game={game} />);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("Board component is rendering properly", () => {
    const game = new GameSession();
    render(<Board game={game} />);

    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
  });

  it("Controls component is rendering properly", () => {
    const game = new GameSession();
    render(<Controls game={game} />);

    const controls = screen.getByTestId("controls");
    expect(controls).toBeInTheDocument();
  });
});
