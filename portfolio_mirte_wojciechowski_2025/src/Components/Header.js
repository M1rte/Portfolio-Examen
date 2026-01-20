import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="profile-pic"></div>
      </div>
      <div className="header-right">
        <h1 className="hello-text">Hello There!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
                    <button class="header-button-projects"><a href="/projects">Naar mijn projecten</a></button>
      </div>
    </header>
  );
};

export default Header;
