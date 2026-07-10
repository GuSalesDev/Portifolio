export default function About() {
  return (
    <section className="gsd-section" id="sobre">
      <div className="gsd-eyebrow">$ whoami</div>
      <h2 className="gsd-h2">Sobre</h2>

      <div className="gsd-about-grid">
        <div className="gsd-about-text">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas no Brasil,
            com foco em backend Java. Estou construindo um portfólio prático
            — não só estudando teoria, mas entregando sistemas completos, do
            banco de dados à interface.
          </p>
          <p>
            Meu objetivo de curto prazo é entrar no mercado como
            desenvolvedor júnior ou estagiário. Sigo um plano de estudos
            estruturado cobrindo Java, Spring Boot, bancos de dados, Git e
            desenvolvimento web, com certificação AWS Cloud Practitioner no
            radar.
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
            <span>gustavo</span>
          </div>
          <div className="row">
            <span>foco</span>
            <span>Java / Spring Boot</span>
          </div>
          <div className="row">
            <span>banco</span>
            <span>PostgreSQL, MySQL</span>
          </div>
          <div className="row">
            <span>frontend</span>
            <span>React + Vite</span>
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