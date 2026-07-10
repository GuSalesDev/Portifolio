export default function ProjectCard({ project }) {
  return (
    <article className="gsd-card" tabIndex={0}>
      <div className="gsd-card-tag">{project.tag}</div>
      <h3 className="gsd-card-name">{project.name}</h3>
      <p className="gsd-card-desc">{project.desc}</p>

      <div className="gsd-stack">
        {project.stack.map((tech) => (
          <span className="gsd-chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}