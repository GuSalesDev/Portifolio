export default function StackMarquee({ label, items, reverse = false }) {
  return (
    <div className="gsd-marquee-wrapper">
      <span className="gsd-marquee-label">{label}</span>

      <div className="gsd-marquee">
        <div className={`gsd-marquee-track ${reverse ? "reverse" : ""}`}>
          <div className="gsd-marquee-group">
            {items.map(({ name, Icon }) => (
              <div className="gsd-tech-chip" key={name}>
                <Icon className="gsd-tech-icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          {/* grupo duplicado, invisível pra leitor de tela, garante o loop sem "salto" */}
          <div className="gsd-marquee-group" aria-hidden="true">
            {items.map(({ name, Icon }) => (
              <div className="gsd-tech-chip" key={`${name}-dup`}>
                <Icon className="gsd-tech-icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}