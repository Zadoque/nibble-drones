import { create } from "zustand";
import  maze from "@/data/maze.json";

type Vec = { x: number; y: number };
type GameState = {
  nibble: Vec;
  move: (dir: Vec) => void;
};

export const useGameStore = create<GameState>()((set, get) => ({
  nibble: { x: 13, y: 15 },
  
  move: (dir) => {
    const { nibble } = get();
    const nx = nibble.x + dir.x;
    const ny = nibble.y + dir.y;

    // ✅ Verificar PRIMEIRO os teleportes na linha 12
    if (nibble.y === 12) {
      if (nibble.x === 0 && dir.x === -1) {
        set({ nibble: { x: 26, y: 12 } });  // teleporta para extrema direita
        return;
      }
      if (nibble.x === 26 && dir.x === 1) {  // corrigido: 26 ao invés de 28
        set({ nibble: { x: 0, y: 12 } });   // teleporta para extrema esquerda
        return;
      }
    }

    // ✅ Depois verificar movimento normal
    if (ny >= 0 && ny < maze.length && 
        nx >= 0 && nx < maze[0].length && 
        maze[ny][nx] !== "W") {
      set({ nibble: { x: nx, y: ny } });
    }
  },
}));

