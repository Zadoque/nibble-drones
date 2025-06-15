// src/app/layout.tsx
'use client'
import { Roboto } from "next/font/google";
import { useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const move = useGameStore((s) => s.move);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const dir = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      }[e.key];
      if (dir) move(dir);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  return <html lang="en"><body>{children}</body></html>;
}



