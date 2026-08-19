import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="gsd-project-page">
        <Link to="/" className="gsd-back-link">
          ← voltar
        </Link>
        <p className="gsd-project-desc">Projeto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="gsd-project-page">
      <Link to="/" className="gsd-back-link">
        ← voltar
      </Link>

      <div className="gsd-eyebrow">{project.tag}</div>
      <h1 className="gsd-project-title">{project.name}</h1>

      <div className="gsd-project-grid">
        <div className="gsd-project-info">
          <p className="gsd-project-desc">
            {project.longDescription || project.desc}
          </p>

          <div className="gsd-stack">
            {project.stack.map((tech) => (
              <span className="gsd-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              className="gsd-btn primary gsd-project-github"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              VER NO GITHUB ↗
            </a>
          )}
        </div>

        <div className="gsd-project-gallery">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, i) => (
              <div className="gsd-gallery-frame" key={i}>
                <img src={img} alt={`${project.name} — imagem ${i + 1}`} />
              </div>
            ))
          ) : (
            <div className="gsd-gallery-placeholder">
              <span>// imagens em breve</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}