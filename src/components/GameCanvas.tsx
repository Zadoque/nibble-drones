"use client";
import React from "react";
import maze from "@/data/maze.json";
import { useGameStore } from "@/store/useGameStore";

const TILE = 16;               // tamanho de cada célula em px
const HEX_RATIO = 0.45;        // raio relativo do hexágono

/* --- Paleta de cores ---------------------------------------------- */
const colors = {
  W: "#1839B7", // parede
  C: "#000000", // corredor
  P: "#1839B7", // portal (mesma cor da parede)
  N: "#111111"  // ninho
} as const;

/* ------------------------------------------------------------------ *
 *  Sprite do Nibble – Hexágono amarelo-esverdeado com contorno neon  *
 * ------------------------------------------------------------------ */
const Nibble: React.FC = () => {
  const { nibble } = useGameStore();

  const cx = nibble.x * TILE + TILE / 2;
  const cy = nibble.y * TILE + TILE / 2;
  const r  = TILE * HEX_RATIO;

  /* Coordenadas dos 6 vértices (começando para cima, sentido horário) */
  const points = Array.from({ length: 6 })
    .map((_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    })
    .join(" ");

  return (
    <polygon
      points={points}
      fill="#F4D03F"
      stroke="#7FFF00"
      strokeWidth={1}
    />
  );
};

/* ------------------------------------------------------------------ *
 *  Componente principal – renderiza o labirinto + Nibble             *
 * ------------------------------------------------------------------ */
export default function GameCanvas() {
  const width  = maze[0].length * TILE;
  const height = maze.length  * TILE;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="border-2 border-blue-500"
    >
      {/* células do labirinto */}
      {maze.map((row, y) =>
        [...row].map((cell, x) => (
          <rect
            key={`${x}-${y}`}
            x={x * TILE}
            y={y * TILE}
            width={TILE}
            height={TILE}
            fill={colors[cell as keyof typeof colors] ?? "#000"}
          />
        ))
      )}

      {/* Nibble */}
      <Nibble />
    </svg>
  );
}
