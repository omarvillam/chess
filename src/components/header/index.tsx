import React, { useState } from "react";
import GameSession from "../../lib/session";
import { GameSessionTimer } from "../../lib/types";
import { secondsToTime, useInitialEffect } from "../../lib/utils";
import "./header.scss";

type Props = {
  game: GameSession;
};

function Header({ game }: Props) {
  const [gameOver, setGameOver] = useState<boolean>(game.isGameOver());
  const [time, setTime] = useState<GameSessionTimer>(game.timer);

  // Observers
  useInitialEffect(() => {
    game.onTimerChange((timer) => setTime(timer));
  });

  useInitialEffect(() => {
    game.onBoardChange(() => {
      setGameOver(game.isGameOver());
    });
  });

  return (
    <div className="header" data-testid="header">
      <h1>Play chess</h1>

      <h2>
        {gameOver
          ? `Whoops! The game is over. The winner is: ${game.getLoser()}`
          : `Turn: ${game.getOrientation()}`}
      </h2>
      <h3>
        White: {secondsToTime(time.white)} || Black: {secondsToTime(time.black)}
      </h3>
    </div>
  );
}

export default Header;
