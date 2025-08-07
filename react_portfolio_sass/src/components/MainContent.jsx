import "../styles/components/maincontent.sass";
import AboutContaibner from "./AboutContaibner";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContaibner />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
