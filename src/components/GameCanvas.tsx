"use client";
import React from "react";
import maze from "@/data/maze.json";
import { useGameStore } from "@/store/useGameStore";

const TILE = 16; // px — tamanho de cada célula

const colors = {
  W: "#1839B7", // muro
  C: "#000000", // corredor
  N: "#FFFFFF"  // ninho dos drones
};

/* --- Sprite do jogador (Nibble) ----------------------- */
const Nibble: React.FC = () => {
  const { nibble } = useGameStore();     // posição (x,y) vinda do Zustand

  return (
    <circle
      cx={nibble.x * TILE + TILE / 2}
      cy={nibble.y * TILE + TILE / 2}
      r={TILE * 0.45}
      fill="#F4D03F"                      // cor amarela-esverdeada
    />
  );
};

/* --- Canvas principal -------------------------------- */
export default function GameCanvas() {
  return (
    <svg
      width={maze[0].length * TILE}
      height={maze.length * TILE}
      className="border-2 border-blue-500"
    >
      {/* desenha cada célula do labirinto */}
      {maze.map((row, y) =>
        [...row].map((cell, x) => (
          <rect
            key={`${x}-${y}`}
            x={x * TILE}
            y={y * TILE}
            width={TILE}
            height={TILE}
            fill={colors[cell as keyof typeof colors]}
          />
        ))
      )}

      {/* desenha o Nibble no topo do labirinto */}
      <Nibble />
    </svg>
  );
}