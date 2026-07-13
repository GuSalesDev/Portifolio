export default function About() {
  return (
    <section className="gsd-section" id="sobre">
      <div className="gsd-eyebrow"> Mais sobre mim</div>
      <h2 className="gsd-h2">Sobre</h2>

      <div className="gsd-about-grid">
        <div className="gsd-about-text">
          <p>
            aqui vai alguma coisa
          </p>
          <p>
            aqui vai alguma coisa
          </p>
        </div>

        <div className="gsd-terminal">
          <div className="head">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="row">
            <span>usuário</span>
            <span>Gustavo</span>
          </div>
          <div className="row">
            <span>foco</span>
            <span>Java / Spring Boot</span>
          </div>
          <div className="row">
            <span>banco</span>
            <span>PostgreSQL & MySQL</span>
          </div>
          <div className="row">
            <span>frontend</span>
            <span>HTML, CSS, React + Vite</span>
          </div>
          <div className="row">
            <span>objetivo</span>
            <span>vaga júnior / estágio</span>
          </div>
          <div className="row">
            <span>status</span>
            <span style={{ color: "#23ffb0" }}>online</span>
          </div>
        </div>
      </div>
    </section>
  );
}