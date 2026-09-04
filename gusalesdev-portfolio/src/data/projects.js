import todoImg1 from "../assets/projects/todoapi.png";
import todoImg2 from "../assets/projects/todoapi2.png";
import todoImg3 from "../assets/projects/todoapi3.png";
import catalogolivro1 from "../assets/projects/catalogolivro1.png";
import catalogolivro2 from "../assets/projects/catalogolivro2.png";
import catalogolivro3 from "../assets/projects/catalogolivro3.png";

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
    images: [todoImg1, todoImg2, todoImg3],
  },
  {
    id: "catalogolivros",
    tag: "PROJ_01 — EM DESENVOLVIMENTO",
    name: "Catálogo de Livros",
    desc:
      "API REST em Java com autenticação JWT e frontend React, para gerenciar um catálogo de livros compartilhado com relacionamentos entre autores e categorias..",
    longDescription:
      "Sistema full-stack para gerenciamento de um catálogo de livros compartilhado entre usuários, como uma biblioteca coletiva. O backend, em Java com Spring Boot, expõe uma API REST com autenticação stateless via JWT, modelando relacionamentos reais entre entidades — um livro pertence a um autor (ManyToOne) e pode ter várias categorias (ManyToMany), com validação de integridade referencial e tratamento de exceções centralizado. O frontend, em React, consome essa API através de um SPA com rotas protegidas, Context API para gerenciar autenticação, e uma identidade visual minimalista inspirada no Notion — com tipografia serifada para títulos e uma lombada colorida em cada linha do catálogo, remetendo a uma estante física. O projeto está implantado em produção, com o backend rodando via Docker no Render e o frontend na Vercel.",
    stack: ["JAVA 21", "PostgreSQL", "React 19", "Spring Boot 3", "JWT", "Vite"],
    githubUrl: "https://github.com/GuSalesDev/catalogodelivros.git",
    images: [catalogolivro1, catalogolivro2, catalogolivro3],
  },
];
