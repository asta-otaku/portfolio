"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function ScrambleText({
  text,
  play,
  className = "",
}: {
  text: string;
  play: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!play) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    const total = text.length;
    const id = window.setInterval(() => {
      frame += 1;
      const revealed = Math.floor((frame / 12) * total);
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealed) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (revealed >= total) {
        setDisplay(text);
        window.clearInterval(id);
      }
    }, 30);

    return () => window.clearInterval(id);
  }, [play, text]);

  return <span className={className}>{display}</span>;
}
