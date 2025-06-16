// src/__tests__/useGameStore.test.tsx
import React from "react";
import { renderHook, act } from "@testing-library/react";
import { useGameStore } from "@/store/useGameStore";

describe("Teleporte", () => {
  it("teleporta de (0,12) para (26,12)", () => {
    const { result } = renderHook(() => useGameStore());

    // posiciona manualmente o Nibble na borda esquerda do túnel
    act(() => {
      useGameStore.setState({ nibble: { x: 0, y: 12 } });
    });

    // passo para a esquerda ativa o teleporte
    act(() => result.current.move({ x: -1, y: 0 }));

    expect(result.current.nibble).toEqual({ x: 26, y: 12 });
  });
});
