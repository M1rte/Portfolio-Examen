import "./Evidence.css";

export default function Evidence() {
const scrollToSection = (id) => {
const section = document.getElementById(id);
section?.scrollIntoView({ behavior: "smooth" });
};

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

return ( <div className="evidence"> 
<header className="evidence-header">
      <div className="evidence-header-left">
      </div>
      <div className="evidence-header-right">
        <h1 className="hello-text">Bewijsmaterialen</h1>
      </div>
        <div className="evidence-nav">
    <button onClick={() => scrollToSection("k1")}>K1</button>
    <button onClick={() => scrollToSection("k2")}>K2</button>
  </div>
    </header>
  <section id="k1" className="evidence-section">
    <h2>K1 – Realiseert software</h2>

    <div className="evidence-grid">
      <div className="evidence-card">
        <h3>W1: Plant werkzaamheden</h3>
        <p>Hier kun je documenten, foto’s of links toevoegen.</p>
      </div>

      <div className="evidence-card">
        <h3>W2: Ontwerpt software</h3>
        <p>Plaats hier jouw bewijsstukken.</p>
      </div>

      <div className="evidence-card">
        <h3>W3: Realiseert software</h3>
        <p>Afbeeldingen, downloads, GitHub links, etc.</p>
      </div>
    </div>
  </section>

  <section id="k2" className="evidence-section">
    <h2>K2 – Werkt in een ontwikkelteam</h2>

    <div className="evidence-grid">
      <div className="evidence-card">
        <h3>W1: Voert overleg</h3>
        <p>Voeg hier beschrijvingen, foto's of documenten toe.</p>
      </div>

      <div className="evidence-card">
        <h3>W2: Presenteert werk</h3>
        <p>Upload bijvoorbeeld je slides of video.</p>
      </div>
    </div>
  </section>
  <button className="back-to-top" onClick={scrollToTop}>
    ⬆ Terug naar boven
  </button>
</div>

);
}
