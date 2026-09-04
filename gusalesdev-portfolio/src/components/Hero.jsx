import { useTypedLines } from "../hooks/useTypedLines";
import Skyline from "./Skyline";
import profilePhoto from "../assets/profile-photo.png";

const BOOT_LINES = [
  "> iniciando sessão…",
  "> usuário: Gustavo Sales",
  "> cargo: desenvolvedor Full-Stack",
  "> status: pronto para produção",
];

export default function Hero() {
  const { rendered, done } = useTypedLines(BOOT_LINES);

  return (
    <header className="gsd-hero">
      <span className="gsd-caracteres left" aria-hidden="true">
        F O C O
      </span>
      <span className="gsd-caracteres right" aria-hidden="true">
        D I S C I P L I N A
      </span>

      <Skyline />

      <div className="gsd-hero-grid">
        <div className="gsd-hero-content">
          <div className="gsd-boot" aria-hidden={done}>
            {rendered.map((line, i) => (
              <div key={i}>
                {line}
                {i === rendered.length - 1 && !done && (
                  <span className="gsd-cursor" />
                )}
              </div>
            ))}
          </div>

          <h1 className="gsd-title">
            <span className="glow">Gustavo</span> Sales
          </h1>

          <p className="gsd-subtitle">Desenvolvedor com foco em Java e Backend, utilizando Spring Boot, APIs REST, PostgreSQL, MySQL e React, além de conhecimentos em Python e JavaScript. </p>


          <div className="gsd-hero-actions">
            <a className="gsd-btn primary" href="#projetos">
              VER PROJETOS
            </a>
            <a
            
              className="gsd-btn ghost"
              href="https://github.com/GuSalesDev"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        <div className="gsd-hero-photo">
          <div className="gsd-photo-frame">
            <img src={profilePhoto} alt="Foto de Gustavo Sales" />
          </div>
        </div>
      </div>
    </header>
  );
}