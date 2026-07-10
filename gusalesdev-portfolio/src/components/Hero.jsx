import { useTypedLines } from "../hooks/useTypedLines";
import Skyline from "./Skyline";

const BOOT_LINES = [
  "> iniciando sessão…",
  "> usuário: gustavo",
  "> cargo: desenvolvedor backend java",
  "> status: pronto para produção",
];

export default function Hero() {
  const { rendered, done } = useTypedLines(BOOT_LINES);

  return (
    <header className="gsd-hero">
      <span className="gsd-kanji left" aria-hidden="true">
        バックエンド開発者
      </span>
      <span className="gsd-kanji right" aria-hidden="true">
        接続 確立
      </span>

      <Skyline />

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

      <p className="gsd-subtitle">
        Desenvolvedor backend Java em formação — construindo sistemas com
        Spring Boot, bancos relacionais e uma boa dose de disciplina de
        engenharia.
      </p>

      <div className="gsd-hero-actions">
        <a className="gsd-btn primary" href="#projetos">
          VER PROJETOS
        </a>
        <a className="gsd-btn ghost" href="https://github.com/GuSalesDev" target="_blank" rel="noreferrer">
          GITHUB ↗
        </a>
      </div>
    </header>
  );
}