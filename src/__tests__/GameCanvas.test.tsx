// src/__tests__/GameCanvas.test.tsx   ← use .tsx para JSX

// src/__tests__/GameCanvas.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import GameCanvas from "@/components/GameCanvas";
import maze from "@/data/maze.json";

describe("GameCanvas", () => {
  it("renderiza todas as células SVG", () => {
    const { container } = render(<GameCanvas />);          {/* ✅ tag fechada */}
    /* Comentário sem <rect> para não confundir o parser */
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBe(maze.length * maze[0].length); // 25 × 29 = 725
  });
});
