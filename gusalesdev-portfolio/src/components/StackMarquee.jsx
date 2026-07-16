export default function StackMarquee({ label, items }) {
  return (
    <div className="gsd-stack-row-wrapper">
      <span className="gsd-marquee-label">{label}</span>

      <div className="gsd-stack-row">
        {items.map(({ name, Icon }) => (
          <div className="gsd-tech-chip" key={name}>
            <Icon className="gsd-tech-icon" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}