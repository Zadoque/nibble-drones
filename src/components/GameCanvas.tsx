"use client";
import maze from "@/data/maze.json";
import React from "react";

const TILE = 16; // px
const colors = { 
  W: "#1839B7", 
  C: "#000000", 
  P: "#1839B7", 
  N: "#111111" 
};

export default function GameCanvas() {
  return (
    <svg
      width={maze[0].length * TILE}
      height={maze.length * TILE}
      className="border-2 border-blue-500"
    >
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
    </svg>
  );
}
