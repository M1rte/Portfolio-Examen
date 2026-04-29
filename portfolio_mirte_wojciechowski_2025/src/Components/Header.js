import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <h1 className="hello-text">Hello There!!</h1>
        <p>
          Welkom op mijn portfolio website! Hier vind je een overzicht van mijn projecten, vaardigheden en contactinformatie. Neem gerust een kijkje rond mijn projecten waar ik erg trots op ben. Ik ben altijd op zoek naar nieuwe connecties, dus aarzel niet om contact met mij op te nemen als je geïnteresseerd bent in mijn werk of als je vragen hebt!
        </p>
          <a href="/projects "><button className="header-button-projects">
            Naar mijn projecten
          </button></a>
      </div>
    </header>
  );
};

export default Header;
