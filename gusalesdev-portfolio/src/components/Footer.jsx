export default function Footer() {
  return (
    <section className="gsd-footer" id="contato">
      <div className="gsd-eyebrow">$ contato --conectar</div>
      <h2 className="gsd-h2">Bora conectar</h2>
      <p>Aberto a oportunidades de estágio e vaga júnior em backend Java.</p>

      <div className="gsd-footer-links">
        <a className="gsd-btn primary" href="https://github.com/GuSalesDev" target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a className="gsd-btn ghost" href="mailto:seuemail@exemplo.com">
          EMAIL
        </a>
        <a className="gsd-btn ghost" href="https://linkedin.com" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
      </div>

      <div className="gsd-fine">
        sistema estável — build compilado com sucesso
      </div>
    </section>
  );
}