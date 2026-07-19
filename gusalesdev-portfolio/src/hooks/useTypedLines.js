import { useEffect, useState } from "react";

export function useTypedLines(lines, speed = 28, pause = 450) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;
    const output = [];

    function tick() {
      if (cancelled) return;

      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }

      const targetLine = lines[lineIdx];

      if (charIdx <= targetLine.length) {
        setRendered([...output, targetLine.slice(0, charIdx)]);
        charIdx += 1;
        setTimeout(tick, speed);
      } else {
        output.push(targetLine);
        lineIdx += 1;
        charIdx = 0;
        setTimeout(tick, pause);
      }
    }

    tick();

    return () => {
      cancelled = true;
    };
  
  }, []);

  return { rendered, done };
}