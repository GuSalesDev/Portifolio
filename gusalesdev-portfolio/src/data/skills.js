export const PROJECTS = [
  {
    id: "vet",
    tag: "PROJ_03 — EM DESENVOLVIMENTO",
    name: "Sistema de Clínica Veterinária",
    desc:
      "Plataforma full-stack para gestão de consultas: autenticação JWT, Spring Security, regras de negócio no domínio, migrações com Flyway. Frontend em React separando áreas de cliente, veterinário e admin.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "React", "Vite"],
  },
  {
    id: "todo",
    tag: "PROJ_02 — EM PRODUÇÃO",
    name: "To-Do List App",
    desc:
      "Aplicação full-stack publicada na nuvem, com autenticação via JWT, interceptors no Axios e API REST protegida por Spring Security.",
    stack: ["Java 21", "Spring Boot 3", "MySQL", "React 19", "Railway"],
  },
  {
    id: "choc",
    tag: "PROJ_01 — CONCEITO / MODELAGEM",
    name: "E-commerce de Chocolates Artesanais",
    desc:
      "Modelagem completa de entidades e arquitetura para uma loja virtual, construída a partir de um levantamento de requisitos simulado.",
    stack: ["Spring Boot", "PostgreSQL", "React"],
  },
];