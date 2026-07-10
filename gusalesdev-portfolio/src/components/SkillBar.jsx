import { useEffect, useRef, useState } from "react";

export default function SkillBar({ skill }) {
  const rowRef = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFill(skill.level);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className="gsd-skill-row" ref={rowRef}>
      <span className="gsd-skill-name">{skill.name}</span>
      <div className="gsd-bar-track">
        <div className="gsd-bar-fill" style={{ width: `${fill}%` }} />
      </div>
      <span className="gsd-skill-pct">{skill.level}%</span>
    </div>
  );
}