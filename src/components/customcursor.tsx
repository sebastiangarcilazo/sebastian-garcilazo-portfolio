"use client";

import { useEffect, useState } from "react";

export default function CustomCursor({
  cursorFile = "customcursor_black.svg", 
  size = 26,                        
}: {
  cursorFile?: string;
  size?: number;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [isDown, setIsDown] = useState(false);

  // Seguir movimiento del mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Detectar hover en botones, links, inputs, etc.
  useEffect(() => {
    const selector =
      "a, button, input, select, textarea, [role='button'], [data-cursor='hover']";

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(selector)) setHover(true);
    };

    const out = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest(selector)) setHover(false);
    };

    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  // Animación click (mousedown → shrink / mouseup → normal)
  useEffect(() => {
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // Ajustar punta del cursor (que coincide con el click real)
  const offsetX = 2;
  const offsetY = 2;

  const scale = isDown ? 0.88 : hover ? 1.08 : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      <img
        src={`/${cursorFile}`} // ← aquí se usa tu archivo del public
        alt="custom cursor"
        draggable="false"
        style={{
          position: "absolute",
          width: size,
          height: size,
          transform: `translate(${pos.x - offsetX}px, ${
            pos.y - offsetY
          }px) scale(${scale})`,
          transformOrigin: "0 0",
          opacity: visible ? 1 : 0,
          transition:
            "transform 25ms linear, opacity 120ms ease-out, filter 120ms ease-out",
          filter: hover
            ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))"
            : "drop-shadow(0 0 4px rgba(148,163,184,0.5))",
          willChange: "transform",
        }}
      />
    </div>
  );
}
