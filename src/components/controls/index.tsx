import React from "react";
import GameSession from "../../lib/session";
import "./controls.scss";

type Props = {
  game: GameSession;
};

function Controls({ game }: Props): JSX.Element {
  return (
    <div className="controls" data-testid="controls">
      <button
        onClick={() => {
          game.reset();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          game.undo();
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          game.redo();
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default Controls;
