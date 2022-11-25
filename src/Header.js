import React from "react";
import reactLogo from "./logo192.png"; 


function Header() {
    return (
      <header className="head">
        <div className="nav">
          <img src={reactLogo} alt="react logo" width="35px" />
          <ul className="nav-item">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    );
  }
  
export default Header;