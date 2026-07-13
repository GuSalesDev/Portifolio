import { SKILLS } from "../data/skills";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section className="gsd-section" id="skills">
      <div className="gsd-eyebrow"> skills</div>
      <h2 className="gsd-h2">Stacks</h2>

      <div className="gsd-skills-list">
        {SKILLS.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}