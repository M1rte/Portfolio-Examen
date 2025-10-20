import "./Projects.css";
import logoKTM from '../img/logoKtm.webp';
import logoKEMBIT from '../img/Logo-darkmode-theKembitTimes.png';
import logoRoermond from '../img/Roermond-logo.png';

export default function Projects() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="projects">
      <h1 id="top">Mijn projecten</h1>

      <div className="projects-container">
        <div className="project-card" onClick={() => scrollToSection("ktm-project")}>
          <img src={logoKTM} alt="KTM motor project" />
          <div className="overlay">
            <div className="text">KTM Project</div>
          </div>
        </div>

        <div className="project-card" onClick={() => scrollToSection("kembit-project")}>
          <img src={logoKEMBIT} alt="Kembit nieuws website project" />
          <div className="overlay">
            <div className="text">Kembit Times</div>
          </div>
        </div>

        <div className="project-card" onClick={() => scrollToSection("roermond-project")}>
          <img src={logoRoermond} alt="Gemeente Roermond project" />
          <div className="overlay">
            <div className="text">Roermond Project</div>
          </div>
        </div>
      </div>

      <div className="project-details">
        <section id="ktm-project">
            <header className="header">
                <div className="header-right">
                    <h1>KTM Project</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button class="header-button"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
        </section>

        <section id="kembit-project">
          <header className="header">
                <div className="header-right">
                    <h1>Kembit Times</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button class="header-button"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
        </section>

        <section id="roermond-project">
          <header className="header">
                <div className="header-right">
                    <h1>Roermond Project</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button class="header-button"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
        </section>
      </div>

      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </div>
  );
}
