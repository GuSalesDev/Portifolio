// Simple Icons — logos de marca específicos
import {
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiVite,
} from "react-icons/si";

// Font Awesome 6 — ícones genéricos de linguagem/ferramenta
import {
  FaJava,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa6";

export const BACKEND_STACK = [
  { name: "Java", Icon: FaJava },
  { name: "Spring Boot", Icon: SiSpring },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: FaGitAlt },
];

export const FRONTEND_STACK = [
  { name: "React", Icon: FaReact },
  { name: "Vite", Icon: SiVite },
  { name: "JavaScript", Icon: FaJs },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
];