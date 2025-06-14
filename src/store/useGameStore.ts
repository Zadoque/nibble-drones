import { create } from "zustand";
import  maze from "@/data/maze.json";
type Vec = { x: number; y: number };
type GameState = {
  nibble: Vec;
  move: (dir: Vec) => void;
};

export const useGameStore = create<GameState>()((set, get) => ({
  nibble: { x: 13, y: 23 }, // ponto de spawn
  move: (dir) => {
   
    const { nibble } = get();
    const nx = nibble.x + dir.x;
    const ny = nibble.y + dir.y;
    if (maze[ny][nx] !== "W") set({ nibble: { x: nx, y: ny } });
  },
}));
