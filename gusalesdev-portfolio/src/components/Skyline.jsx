const BUILDINGS = [
  [0, 140, 60], [70, 100, 50], [130, 170, 70],
  [210, 60, 55], [275, 130, 45], [330, 90, 65],
  [405, 180, 50], [465, 70, 60], [535, 150, 55],
  [600, 110, 70], [680, 190, 45], [735, 80, 60],
  [805, 150, 55], [870, 100, 65], [945, 170, 50],
  [1005, 60, 60], [1075, 130, 55], [1140, 95, 60],
];

const WINDOW_LIGHTS = [
  60, 155, 250, 350, 440, 540, 630, 720, 820, 910, 1000, 1090,
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