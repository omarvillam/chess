export type GameSessionTimer = { white: number; black: number };

export type GameSessionListeners = {
  move: Array<(position: string) => void>;
  timer: Array<(time: GameSessionTimer) => void>;
};

export type GameSessionHistory = {
  timer: GameSessionTimer;
  position: string;
}[];

export type GameSessionStorage = {
  history: GameSessionHistory;
  timer: GameSessionTimer;
  position: string;
  currentIndex: number;
};
