import React from "react";
import logoKTM from '../img/LogoKtm.png';
import logoKEMBIT from '../img/LogoKEMBIT.png';
import logoRoermond from '../img/LogoRoermond.png';
import "./HeaderPortfolio.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const HeaderPortfolio = () => {
  return (
    <header className="HeaderPortfolio">
      <div className="HeaderPortfolio-content">
        <h2 className="hello-text">Mijn Projecten</h2>
        <div className="projects-grid">
          
          <div className="project-card" onClick={() => scrollToSection("ktm-project")}>
            <div className="card-image-wrapper">
              <img src={logoKTM} alt="KTM project" />
            </div>
            <div className="project-info">
              <h3>KTM Project</h3>
              <p>Kunst, Theater & Media</p>
            </div>
          </div>

          <div className="project-card" onClick={() => scrollToSection("kembit-project")}>
            <div className="card-image-wrapper">
              <img src={logoKEMBIT} alt="Kembit project" />
            </div>
            <div className="project-info">
              <h3>Kembit Times</h3>
              <p>Nieuws Website</p>
            </div>
          </div>

          <div className="project-card" onClick={() => scrollToSection("roermond-project")}>
            <div className="card-image-wrapper">
              <img src={logoRoermond} alt="Roermond project" />
            </div>
            <div className="project-info">
              <h3>Roermond Project</h3>
              <p>Gemeente Portaal</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeaderPortfolio;