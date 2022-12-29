import React from "react";
import "../style/Header.css";
import Logochica from "../img/imgLogochica.png";
import LogoAlfa from "../img/LogoAlfa.png";
import { useNavigate } from "react-router-dom";



export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="arriba">
      <a href="#!">
        <img className="logoAlfa" onClick={() => navigate("/")} src={LogoAlfa} alt="logoAlfa" />
        <img className="logo" src={Logochica} alt="logoChicaAlfa" />
      </a>
    </div>
  );
}
