# Gustavo Sales — Portfólio

Portfólio profissional de Gustavo Sales, desenvolvido para apresentar sua experiência, stack e projetos de desenvolvimento full-stack. A aplicação possui uma identidade visual inspirada em interfaces futuristas, é responsiva e conta com páginas detalhadas para cada projeto.

VIZUALIZE: https://portifolio-gray-one-92.vercel.app/

## Funcionalidades

- Landing page com seções de apresentação, sobre, habilidades, projetos e contato.
- Navegação por âncoras na página inicial.
- Página individual para cada projeto em `/projetos/:id`.
- Galeria de imagens com lightbox e suporte para fechar com a tecla `Esc`.
- Links para os repositórios dos projetos apresentados.
- Layout responsivo para desktop e dispositivos móveis.
- Animações e elementos visuais implementados com CSS e React.
- Configuração de rewrite para que as rotas do React funcionem na Vercel.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- JavaScript (ES Modules)
- HTML5 e CSS3
- ESLint
- Vercel

## Projetos apresentados

O portfólio apresenta atualmente:

| Projeto | Descrição | Tecnologias principais |
| --- | --- | --- |
| [Code Review Assistant](https://github.com/GuSalesDev/codereviewapi) | API REST que usa IA para revisar código Java e apontar bugs, riscos de segurança e boas práticas. | Java 21, Spring Boot 4, LangChain4j, OpenAI |
| [To-Do List App](https://github.com/GuSalesDev/todoapi) | Aplicação full-stack de gerenciamento de tarefas com autenticação e autorização por usuário. | Java 21, Spring Boot, Spring Security, JWT, MySQL, React |
| [Catálogo de Livros](https://github.com/GuSalesDev/catalogodelivros) | Sistema full-stack para gerenciamento compartilhado de livros, autores e categorias. | Java 21, Spring Boot, PostgreSQL, JWT, React |

Os dados dos projetos, incluindo descrições, tecnologias, links e imagens, ficam centralizados em [`src/data/projects.js`](src/data/projects.js).

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação e execução

Clone o repositório e entre na pasta da aplicação:

```bash
git clone https://github.com/GuSalesDev/Portifolio.git
cd Portifolio/gusalesdev-portfolio
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra a URL exibida pelo Vite no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Hot Module Replacement. |
| `npm run build` | Gera a versão otimizada para produção em `dist/`. |
| `npm run preview` | Serve localmente a build de produção. |
| `npm run lint` | Executa o ESLint nos arquivos do projeto. |

Para validar uma alteração antes de publicar:

```bash
npm run lint
npm run build
```

## Estrutura do projeto

```text
gusalesdev-portfolio/
├── public/                 # Favicon e arquivos públicos
├── src/
│   ├── assets/             # Imagens de perfil e projetos
│   ├── components/         # Componentes reutilizáveis da interface
│   ├── data/               # Dados da stack e dos projetos
│   ├── hooks/              # Hooks customizados
│   ├── pages/              # Páginas Home e detalhes do projeto
│   ├── App.jsx             # Rotas principais da aplicação
│   ├── index.css           # Estilos globais e identidade visual
│   └── main.jsx            # Ponto de entrada do React
├── index.html
├── vercel.json             # Rewrite para o roteamento do React
└── vite.config.js
```

## Adicionando um novo projeto

1. Adicione as imagens do projeto em `src/assets/projects/`.
2. Importe as imagens em `src/data/projects.js`.
3. Inclua um novo objeto no array `PROJECTS`, com `id`, `name`, `desc`, `longDescription`, `stack`, `githubUrl` e `images`.
4. Execute `npm run lint` e `npm run build` para validar a alteração.

O novo projeto será exibido automaticamente na seção de projetos e terá uma página acessível em `/projetos/<id>`.

## Deploy

O projeto está preparado para deploy na Vercel:

1. Importe o repositório na Vercel.
2. Defina `gusalesdev-portfolio` como diretório raiz do projeto.
3. Use `npm run build` como comando de build.
4. Use `dist` como diretório de saída.

O arquivo [`vercel.json`](vercel.json) redireciona as requisições para `index.html`, permitindo o funcionamento das rotas do React após o deploy.

## Contato

- GitHub: [@GuSalesDev](https://github.com/GuSalesDev)
- E-mail: [gustavo6624@gmail.com](mailto:gustavo6624@gmail.com)
- LinkedIn: [Gustavo Sales](https://linkedin.com)
