import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="gsd-section" id="projetos">
      <div className="gsd-eyebrow">$ ls ./projetos</div>
      <h2 className="gsd-h2">Projetos</h2>

      <div className="gsd-projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}