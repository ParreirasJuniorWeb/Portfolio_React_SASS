import "../styles/components/socialNetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    link: "https://www.linkedin.com/in/jvparreiras",
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://github.com/ParreirasJuniorWeb",
    name: "github",
    icon: <FaGithub />,
  },
  {
    link: "https://www.instagram.com/parreiras.joao/",
    name: "instagram",
    icon: <FaInstagram />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
