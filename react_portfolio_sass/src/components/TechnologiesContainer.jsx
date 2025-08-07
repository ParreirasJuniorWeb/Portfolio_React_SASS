import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiWindows,
  DiBootstrap,
  DiPhp,
  DiPostgresql,
  DiUbuntu,
  DiJava,
} from "react-icons/di";

import "../styles/components/technologiesContainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    desc: "Linguagem de marcação HTML. Utilizo na estrutura de muitos dos meus websites.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    desc: "Linguagem de estilização e layout/Design. Bastante utilizada na composição dos meus websites para torná-los responsivos.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    desc: "Linguagem de programação front-end muito utilizada para gerar interatividade em meus websites.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    desc: "Framework da linguagem de programação javascript para servidor. Utilizei para composição do back-end em javascript na maioria dos meus websites.",
  },
  {
    id: "mysql",
    name: "Mysql",
    icon: <DiMysql />,
    desc: "Sistema gerenciador de banco de dados para web. Utilizo como base de dados dos meus sites.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    desc: "Tecnologia front-end a base de javascript para compor websites interativos. Estrutura base dos meus sites.",
  },
  {
    id: "windows",
    name: "Windows",
    icon: <DiWindows />,
    desc: "Sistemas opracionais Windows 10/11. Competência para operar em sistemas Windows.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <DiBootstrap />,
    desc: "Biblioteca de front-end CSS com elementos responsivos. É a base do CSS de muitos dos meus sites.",
  },
  {
    id: "php",
    name: "Php",
    icon: <DiPhp />,
    desc: "Linguagem de programação típica da web. Serve como back-end para muitos de meus sites.",
  },
  {
    id: "postgresql",
    name: "Postgresql",
    icon: <DiPostgresql />,
    desc: "Sistema gerenciador de banco de dados para web. Utilizo como base de dados dos meus sites.",
  },
  {
    id: "java",
    name: "Java",
    icon: <DiJava />,
    desc: "Linguagem de programação robusta e multiplataforma. Serve como back-end para muitos de meus sites.",
  },
  {
    id: "Ubuntu",
    name: "Ubuntu",
    icon: <DiUbuntu />,
    desc: "Sistema opracional Linux Ubuntu. Competência para operar em sistemas Linux.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
