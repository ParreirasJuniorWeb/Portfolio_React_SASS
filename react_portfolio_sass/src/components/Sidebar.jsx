import Avatar from "../img/foto_perfil_portfolio_1-removebg-preview.png";

import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img
        src={Avatar}
        alt="João Victor Parreiras"
        style={{ width: "11.5rem" }}
      />
      <p className="title">
        Desenvolvedor <br />
        <br />
        <small>
          Técnico em Informática | Estagiário em TI na SES-MG | Graduando em
          Análise e Desenvolvimento de Sistemas | Entusiasta de Cloud e
          Desenvolvimento Web
        </small>
      </p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="../img/Perfil_LinkedIn_Modelo_Profissional_Joao_Victor.docx"
        className="btn"
        download="Modelo_Profissional_Joao_Victor.docx"
      >
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
