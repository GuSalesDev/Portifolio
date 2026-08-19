export default function About() {
  return (
    <section className="gsd-section" id="sobre">
      <div className="gsd-eyebrow"> Mais sobre mim</div>
      <h2 className="gsd-h2">Sobre</h2>

      <div className="gsd-about-grid">
        <div className="gsd-about-text">
          <p>
            Sou estudante de desenvolvimento de software e desenvolvedor Full Stack, com foco na criação de aplicações completas e soluções funcionais. Trabalho principalmente com Java, Spring Boot, React, JavaScript, Python, SQL e PostgreSQL, desenvolvendo APIs REST, interfaces web, integrações entre frontend e backend, autenticação e bancos de dados.
          </p>
          <p>
           Tenho experiência em levar projetos do desenvolvimento até a produção, incluindo a integração entre frontend e backend e o deploy das aplicações. Atualmente, busco aprimorar meus conhecimentos em arquitetura de software, cloud e desenvolvimento de aplicações escaláveis, com o objetivo de evoluir como desenvolvedor e futuramente atuar em projetos internacionais.
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