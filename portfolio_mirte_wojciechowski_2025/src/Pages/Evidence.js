import "./Evidence.css";

export default function Evidence() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="evidence">

      <header className="evidence-header">
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
        <h2>B1-K1-W1</h2>
        <h2>Documentatie KTM Website</h2>
        <div className="evidence-grid">

          <a
            href="/Documents/BehoefteanalyseKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Behoefte analyse KTM Website</h3>
          </a>

          <a
            href="/Documents/FunctioneelOntwerpKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Functioneel ontwerp KTM Website</h3>
          </a>

          <a
            href="/Documents/TechnischOntwerpKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Technisch ontwerp KTM Website</h3>
          </a>
        </div>

        <h2>Documentatie The Kembit Times</h2>
        <div className="evidence-grid">

          <a
            href="/Documents/BehoefteanalyseTheKembitTimesMirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Behoefte analyse The Kembit Times</h3>
          </a>

          <a
            href="/Documents/FuntioneelontwerpTheKembitTimesVersion.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Functioneel ontwerp The Kembit Times</h3>
          </a>

          <a
            href="/Documents/RSSfeedopdracht.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>RSS-feed opdracht (screenshots + problemen/oplossingen)</h3>
          </a>
        </div>

      <h2>B1-K1-W2</h2>
        <div className="evidence-grid">

          <a
            href="/Documents/DatabaseDiagramTheKEMBITTimes.png"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Database diagram The Kembit Times</h3>
          </a>

          <a
            href="/Documents/ActivitydiagramTheKembitTimes.png"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Activity diagram The Kembit Times</h3>
          </a>

          <a
            href="/Documents/ScreenshotsUITheKEMBITTimes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>UI The Kembit Times</h3>
          </a>
        </div>

        <h2>B1-K1-W5</h2>
        <div className="evidence-grid">
          <a
            href="/Documents/verbetervoorstellenTheKembitTimesWIP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>Verbeter voorstellen The Kembit Times</h3>
          </a>
        </div>

      </section>

      <section id="k2" className="evidence-section">
        <h2>K2 – Werkt in een ontwikkelteam</h2>
        <h2>B1-K2-W1</h2>
        <div className="evidence-grid">
          <a
            href="/Documents/TheKembitTimesGesprek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>The Kembit Times interview vragen</h3>
          </a>

          <a
            href="/Documents/DeelopleveringTheKembitTimes.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h3>The Kembit Times interview opname</h3>
          </a>
        </div>

      </section>


      <button className="back-to-top" onClick={scrollToTop}>
        ⬆ Terug naar boven
      </button>

    </div>
  );
}