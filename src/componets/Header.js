import React, { Component } from "react";
import "../style/Header.css";
import Logochica from "../img/imgLogochica.png";
import LogoAlfa from "../img/LogoAlfa.png";

export default class Header extends Component {
  render() {
    return (
      <div className="arriba">
        <a href="/">
          <img className="logoAlfa" src={LogoAlfa} alt="logoAlfa" />
          <img className="logo" src={Logochica} alt="logoChicaAlfa" />
        </a>
      </div>
    );
  }
}
