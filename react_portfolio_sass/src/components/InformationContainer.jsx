import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/components/informationContainer.sass";

const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>
            Telefone <FaWhatsapp id="whats_icon" />
          </h3>
          <p>
            <a
              id="link_whats"
              href="https://wa.me//5531992396360?text=Tenho%20interesse%20em%20contratar%20os%20seus%20serviços"
            >
              (31) 992396360
            </a>
          </p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>
            <a href="mailto:joaoparreiras2020@gmail.com" id="link_email">
              joaoparreiras2020@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>
            <a href="https://maps.app.goo.gl/4dPsqUhqnNaqvTKbA" id="link_maps">
              Venda Nova - Belo Horizonte / MG
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
