import React from "react";
import logo from "../assets/img/logo.svg";
import "../style/Footer.css"; // Assurez-vous de créer le fichier de style CSS correspondant

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo de l'entreprise" />
        </div>
        <div className="company-info">
          <p>BlueProduction - Site par Alicia Morin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
