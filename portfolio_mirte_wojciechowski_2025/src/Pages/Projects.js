import "./Projects.css";
import HeaderPortfolio from "../Components/HeaderPortfolio";

export default function Projects() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="projects">
      <HeaderPortfolio
      />

      <div className="project-details">
        <section id="ktm-project">
            <header className="header-projects header-ktm">
                <div className="header-right-projects">
                    <h1>KTM Project</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>KTM Project</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                  </p>
                  <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
              </div>
        </section>

        <section id="kembit-project">
          <header className="header-projects header-kembit">
                <div className="header-right-projects">
                    <h1>Kembit Times</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>Kembit Times</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                  </p>
                  <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
              </div>
        </section>

        <section id="roermond-project">
          <header className="header-projects header-roermond">
                <div className="header-right-projects">
                    <h1>Roermond Project</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>Roermond Project</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                  </p>
                  <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
              </div>
        </section>
      </div>

      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </div>
  );
}
