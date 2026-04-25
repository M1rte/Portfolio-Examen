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
                    KTM (Kunst,Theater en Media) is een groep opleidingen van het VISTA college. 
                    Ze willen een website waar je niet alleen informatie over de opleidingen kunt vinden, 
                    maar ook een overzicht van de shows die ze organiseren. 
                    Ze willen dat deze website gekoppeld is aan het evenement organisatie platform “Stager” omdat ze deze betrouwbare omgeving al gebruiken voor hun ticketverkoop en showbeheer. 
                    De website moet een moderne uitstraling hebben die past bij de besproken stijl van KTM, 
                    en het moet gemakkelijk zijn voor bezoekers om tickets te kopen en informatie te vinden over de verschillende opleidingen.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>KTM Project</h1>
                  <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
              </div>
        </section>

        <section id="kembit-project">
          <header className="header-projects header-kembit">
                <div className="header-right-projects">
                    <h1>Kembit Times</h1>
                    <p>
                    Tijdens mijn stage bij Kembit heb ik gewerkt aan een project genaamd "The Kembit Times". 
                    Bij deze opdracht was het doel om een nieuwswebsite te maken voor onze klant (mijn stagebegeleider). 
                    Hij wou een overzichtelijke website waar hij zijn gekozen nieuwsitems kon lezen, 
                    toevoegen en verwijderen. Hier was de focus het makkelijk kunnen gebruiken van de website, 
                    en het overzichtelijk kunnen beheren van de nieuwsitems.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>Kembit Times</h1>
                  <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
              </div>
        </section>

        <section id="roermond-project">
          <header className="header-projects header-roermond">
                <div className="header-right-projects">
                    <h1>Roermond Project</h1>
                    <p>
                    Tijdens mijn stage bij KEMBIT heb ik gewerkt aan een project genaamd "The Kembit Times". 
                    Bij deze opdracht was het doel om een nieuwswebsite te maken voor onze klant (mijn stagebegeleider). 
                    Hij wou een overzichtelijke website waar hij zijn gekozen nieuwsitems kon lezen, 
                    toevoegen en verwijderen. Hier was de focus het makkelijk kunnen gebruiken van de website, 
                    en het overzichtelijk kunnen beheren van de nieuwsitems.
                    </p>
                    <button className="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
                </div>
            </header>
              <div className="project-section">
                <h1>Roermond Project</h1>
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
