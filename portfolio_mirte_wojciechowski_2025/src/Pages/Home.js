import Header from "../Components/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header 
        title="Welcome to My Portfolio" 
        subtitle="Frontend Developer | React Enthusiast" 
      />

      <section className="section">
        <div className="image-container">
          <img src="../../home1.jpg" alt="About me" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with experience in React,
            building modern and responsive websites. I enjoy turning ideas into
            interactive digital experiences.
          </p>
                              <button class="header-button-projects"><a href="/About">Meer over mij</a></button>
        </div>
      </section>

      <section className="section reverse">
        <div className="image-container">
          <img src="../../home2.jpg" alt="Projects" />
        </div>
        <div className="text-container-reverse">
          <h2>Projects</h2>
          <p>
            I have worked on several projects ranging from portfolio websites to
            dynamic web applications. Each project taught me new skills and best
            practices.
          </p>
          <button class="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
        </div>
      </section>

      <section className="section">
        <div className="image-container">
          <img src="../../home4.jpg" alt="Contact" />
        </div>
        <div className="text-container">
          <h2>Contact</h2>
          <p>
            Interested in working together? Feel free to reach out via the
            contact page. I’d love to collaborate with you!
          </p>
          <button class="header-button-projects"><a href="/contact">Neem contact op met mij</a></button>
        </div>
      </section>
    </div>
  );
}
