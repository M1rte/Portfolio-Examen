import Header from "../Components/Header";
import "./Home.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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
          <a href="/about "><button className="header-button-home">
           Meer over mij
          </button></a>
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
          <a href="/contact "><button className="header-button-home">
            Neem contact op met mij
          </button></a>
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
          <a href="/projects "><button className="header-button-home">
            Naar mijn projecten
          </button></a>
        </div>
      </section>

      <section id="code-icon" className="skills-section">
        <h2>De codeertalen die ik gebruik</h2>

        <div className="skills-grid">
          <div className="skill" data-skill="html">
            <FaHtml5 />
            <span>HTML</span>
          </div>

          <div className="skill" data-skill="css">
            <FaCss3Alt />
            <span>CSS</span>
          </div>

          <div className="skill" data-skill="js">
            <FaJsSquare />
            <span>JavaScript</span>
          </div>

          <div className="skill" data-skill="ts">
            <SiTypescript />
            <span>TypeScript</span>
          </div>

          <div className="skill" data-skill="react">
            <FaReact />
            <span>React</span>
          </div>

          <div className="skill" data-skill="python">
            <FaPython />
            <span>Python</span>
          </div>
        </div>

          <a href="/projects "><button className="header-button-home">
            Naar mijn projecten
          </button></a>
      </section>
    </div>
  );
}
