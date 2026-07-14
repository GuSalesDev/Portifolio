import { BACKEND_STACK, FRONTEND_STACK } from "../data/stack";
import StackMarquee from "./StackMarquee";

export default function Skills() {
  return (
    <section className="gsd-section" id="skills">
      <div className="gsd-eyebrow">stack</div>
      <h2 className="gsd-h2">Stacks</h2>

      <div className="gsd-stack-rows">
        <StackMarquee label="BACKEND" items={BACKEND_STACK} />
        <StackMarquee label="FRONTEND" items={FRONTEND_STACK} reverse />
      </div>
    </section>
  );
}