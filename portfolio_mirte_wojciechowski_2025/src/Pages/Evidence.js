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

        <h3>B1-K1-W1: Plant werkzaamheden en bewaakt de voortgang</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/B1K1MirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Voortgangsdocument</h4>
          </a>

          <a
            href="/Documents/GithubSamenwerking.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Github +samenwerking</h4>
          </a>

          <a
            href="/Documents/RSSfeedopdracht.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>RSS opdracht planning</h4>
          </a>

        </div>

        <h3>B1-K1-W2: Ontwerpt software</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/BehoefteanalyseKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Behoefteanalyse KTM Website</h4>
          </a>

          <a
            href="/Documents/FunctioneelOntwerpKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Functioneel ontwerp KTM Website</h4>
          </a>

          <a
            href="/Documents/TechnischOntwerpKTMWebsite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Technisch ontwerp KTM Website</h4>
          </a>

          <a
            href="/Documents/BehoefteanalyseTheKembitTimesMirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Behoefteanalyse The Kembit Times</h4>
          </a>

          <a
            href="/Documents/FuntioneelontwerpTheKembitTimesVersion.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Functioneel ontwerp The Kembit Times</h4>
          </a>

          <a
            href="/Documents/DatabaseDiagramTheKEMBITTimes.png"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Database diagram</h4>
          </a>

          <a
            href="/Documents/ActivitydiagramTheKembitTimes.png"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Activity diagram</h4>
          </a>
          <a
            href="/Documents/ScreenshotsUITheKEMBITTimes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>UI gerealiseerd</h4>
          </a>

        </div>

        <h3>B1-K1-W3: Realiseert (onderdelen van software)</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/RSSfeedopdracht.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>RSS Feed gebouwd + backend</h4>
          </a>

          <a
            href="/Documents/CodeBewijsMirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Code bewijs The KEMBIT Times</h4>
          </a>

          <a
            href="/Documents/Bewijs_TheKembitTimesDemo.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Werkende applicatie demo</h4>
          </a>

        </div>

        <h3>B1-K1-W4: Test software</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/RSSfeedopdracht.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Fouten, testen en oplossingen</h4>
          </a>

          <a
            href="/Documents/MirteWojciechowskiTestPlanTheKembitTimes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Testplan The KEMBIT Times</h4>
          </a>

        </div>

        <h3>B1-K1-W5: Doet verbetervoorstellen voor software</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/VerbetervoorstellenTheKEMBITTimes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Verbeter voorstellen The KEMBIT Times</h4>
          </a>

          <a
            href="/Documents/VerbetervoorstellenPortfolioexamen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Verbeter voorstellen PortfolioExamen</h4>
          </a>

        </div>
      </section>

      <section id="k2" className="evidence-section">
        <h2>K2 – Werkt in een ontwikkelteam</h2>

        <h3>B1-K2-W1: Voert overleg</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/TheKembitTimesGesprek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Interview / overlegdocument</h4>
          </a>
          
          <a
            href="/Documents/GithubSamenwerking.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Github +samenwerking</h4>
          </a>

          <a
            href="/Documents/TheKembitTimesOpname.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Overleg opname</h4>
          </a>

        </div>

        <h3>B1-K2-W2: Presenteert het opgeleverde werk</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/DeelopleveringTheKembitTimes.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Presentatie deeloplevering</h4>
          </a>

          <a
            href="/Documents/ScreenshotsUITheKEMBITTimes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Presentatie visuals / UI</h4>
          </a>

        </div>

        <h3>B1-K2-W3: Reflecteert op het werk</h3>
        <div className="evidence-grid">

          <a
            href="/Documents/ReflectieverslagMirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Reflectie The KEMBIT Times</h4>
          </a>

          <a
            href="/Documents/B1K1MirteWojciechowski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="evidence-card"
          >
            <h4>Voortgang + evaluatie</h4>
          </a>

        </div>
      </section>

      <button className="back-to-top" onClick={scrollToTop}>
        ⬆ Terug naar boven
      </button>
    </div>
  );
}