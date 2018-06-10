import React from 'react';
import "../css/App.css";
import logo from "../img/transformers.jpg"

const Header = props => (
  <header className="header">
    <img 
      className="headerImg"
      src={logo} 
      alt="Transformers Clicky Game!" />
  </header>
);

export default Header;