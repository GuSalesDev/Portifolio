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
    longDescription:
      "Aplicação Full Stack para gerenciamento de tarefas, desenvolvida com Java 21, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate e MySQL no backend, e React 19, Vite, Axios e CSS no frontend. O sistema permite cadastro e autenticação de usuários, criação, gerenciamento e exclusão de tarefas, garantindo que cada usuário tenha acesso apenas aos seus próprios dados. O backend segue uma arquitetura em camadas, com validação de dados, tratamento global de exceções, autenticação stateless e senhas protegidas com BCrypt. O frontend é responsivo e integrado à API REST por meio de autenticação JWT. O projeto foi totalmente integrado e publicado em produção no Railway, com deploy automatizado via GitHub e banco de dados hospedado na própria plataforma.",
    stack: ["Java 21", "Spring Boot 3", "MySQL", "React 19", "Railway"],
    githubUrl: "https://github.com/GuSalesDev/todoapi",
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
