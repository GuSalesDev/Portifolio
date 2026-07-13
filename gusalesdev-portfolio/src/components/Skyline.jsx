const BUILDINGS = [
  
];

const WINDOW_LIGHTS = [
 
];

export default function Skyline() {
  return (
    <svg
      className="gsd-skyline"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1310" stopOpacity="0" />
          <stop offset="100%" stopColor="#05080a" stopOpacity="1" />
        </linearGradient>
      </defs>

      {BUILDINGS.map(([x, h, w], i) => (
        <rect
          key={i}
          x={x}
          y={300 - h}
          width={w}
          height={h}
          fill="#0e1a15"
          stroke="#124d3a"
          strokeWidth="1"
        />
      ))}

      {WINDOW_LIGHTS.map((x, i) => (
        <rect
          key={i}
          x={x}
          y={300 - (60 + (i % 4) * 22)}
          width="4"
          height="10"
          fill="#23ffb0"
          opacity={0.5 + (i % 3) * 0.15}
        >
          <animate
            attributeName="opacity"
            values="0.9;0.3;0.9"
            dur={`${2 + (i % 3)}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      <rect x="0" y="0" width="1200" height="300" fill="url(#fade)" />
    </svg>
  );
}