const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        <h3>👨‍💻 Perfil — Programador Júnior: ParreirasJuniorWeb</h3>
        <br />
        Sou um programador júnior dedicado, focado em fortalecer minhas
        habilidades em desenvolvimento web e backend. Possuo diversos projetos
        publicados no GitHub que demonstram minha evolução técnica, organização
        de código e capacidade de entrega de soluções reais.
        <br />
        <br />
        <h3>🛠 Tecnologias dominadas</h3>
        <br />
        <ul style={{ marginLeft: "2.2rem" }}>
          <li>
            Frontend: HTML, CSS, JavaScriptFrontend: HTML, CSS, JavaScript
          </li>
          <li>
            Backend: Node.js, Express (ou frameworks similares em Java/Python)
          </li>
          <li>Banco de dados: MySQL, SQLite ou similares</li>
          <li>
            Versionamento: Git / GitHub (com commits claros e README
            explicativos)
          </li>
          <li>
            Documentação: README estruturado, instruções de uso e instalação
          </li>
          <li>
            Metodologias: Organização em branches, commits com boas mensagens,
            uso de CI/CD básico (quando aplicável)
          </li>
        </ul>
        <br />
        <br />
        <h3>📌ParreirasJuniorWeb — Programador Júnior</h3>
        <br />
        <ul style={{ marginLeft: "2.2rem" }}>
          <li>
            Desenvolvimento de aplicações web com HTML, CSS e JavaScript,
            integradas a APIs backend usando Node.js e banco de dados
            MySQL/SQLite.
          </li>
          <li>
            Experiência na configuração de controle de versão com Git e GitHub,
            utilizando boas práticas como commits atômicos e README completos.
          </li>
          <li>
            Participação ativa no GitHub com projetos públicos que demonstram
            autonomia, organização e evolução técnica.
          </li>
          <li>
            Conhecimento básico em processos de CI/CD, testes automatizados e
            deploy simples (GitHub Pages ou serviços similares).
          </li>
        </ul>
      </p>
      <a href="http://bit.ly/3t1yzNY" className="btn" target="_blank">
        Anexo Projetos GoogleDrive
      </a>
      <br />
      <h3 style={{ color: "gray" }}>
        📁 Principais projetos públicos no GitHub
      </h3>
      <br />
      <p>Acesse seu perfil para explorar os repositórios:</p>
      <p>Vale destacar os seguintes pontos:</p>
      <ul style={{ marginLeft: "2.2rem", color: "#dededea8" }}>
        <li style={{ padding: ".5rem" }}>
          Repositórios bem documentados, com README explicando o propósito, como
          rodar o projeto e tecnologias utilizadas.
        </li>
        <li style={{ padding: ".5rem" }}>
          Projetos com estruturas claras, separados por funcionalidades
          (frontend, backend, API).
        </li>
        <li style={{ padding: ".5rem" }}>
          Possível presença de aplicações web simples (como gerenciadores, CRUDs
          ou automações) usando HTML, CSS, JavaScript e backend com
          Node.js/MySQL.
        </li>
      </ul>
      <br />
      <a
        href="https://github.com/ParreirasJuniorWeb"
        className="btn"
        target="_blank"
      >
        Ver Projetos no GitHub
      </a>
      <br />
    </section>
  );
};

export default ProjectsContainer;
