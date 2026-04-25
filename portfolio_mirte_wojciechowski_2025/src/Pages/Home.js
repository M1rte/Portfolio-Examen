import Header from "../Components/Header";
import "./Home.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import home1 from "../img/home1.jpg";
import home2 from "../img/home2.jpg";
import home4 from "../img/home4.jpg";

export default function Home() {
  return (
    <div className="home">
      <Header
        title="Welcome to My Portfolio"
        subtitle="Frontend Developer | React Enthusiast"
      />

      <section className="section">
        <div className="image-container">
          <img src={home1} alt="About me" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Ik ben een gepassioneerde frontend developer met ervaring in React, 
            hierbij leg ik mijn focus vooral op het designen en realiseren van mijn ideen. 
            En deze op een moderne en responsieve manier tot leven te wekken. 
            Ook hou ik ervan om te leren over backend development, 
            zodat ik steeds meer kan groeien als developer.
          </p>
          <a href="/about "><button className="header-button-home">
           Meer over mij
          </button></a>
        </div>
      </section>

      <section className="section reverse">
        <div className="image-container">
          <img src={home2} alt="Projects" />
        </div>
        <div className="text-container-reverse">
          <h2>Projects</h2>
          <p>
            Ik heb tijdens deze studie aan verschillende projecten gewerkt, 
            variërend van portfolio websites tot dynamische webapplicaties. 
            Elk project heeft me nieuwe vaardigheden geleerd. 
            Waardoor ik een focus leg op nette code en originele designs.

          </p>
          <a href="/contact "><button className="header-button-home">
            Neem contact op met mij
          </button></a>
        </div>
      </section>

      <section className="section">
        <div className="image-container">
          <img src={home4} alt="Contact" />
        </div>
        <div className="text-container">
          <h2>Contact</h2>
          <p>
            Heb je nog vragen of toevoegingen? Of wil je contact met mij opnemen?
            Stuur me gerust een berichtje, ik sta altijd open voor nieuwe connecties!
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

          <div className="skill" data-skill="csharp">
            <SiDotnet />
            <span>C#</span>
          </div>
        </div>

          <a href="/projects "><button className="header-button-home">
            Naar mijn projecten
          </button></a>
      </section>
    </div>
  );
}
