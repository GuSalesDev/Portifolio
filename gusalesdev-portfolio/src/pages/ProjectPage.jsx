import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
              <button
                className="gsd-gallery-frame"
                type="button"
                key={i}
                onClick={() =>
                  setSelectedImage({
                    src: img,
                    alt: `${project.name} — imagem ${i + 1}`,
                  })
                }
                aria-label={`Ampliar imagem ${i + 1} de ${project.name}`}
              >
                <img src={img} alt={`${project.name} — imagem ${i + 1}`} />
                <span className="gsd-gallery-zoom-hint">ampliar ↗</span>
              </button>
            ))
          ) : (
            <div className="gsd-gallery-placeholder">
              <span>// imagens em breve</span>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="gsd-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gsd-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem ampliada"
          >
            ×
          </button>
          <img
            className="gsd-lightbox-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}