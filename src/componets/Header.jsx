import React from "react";
import Logochica from "../img/imgLogochica.png";
import LogoAlfa from "../img/LogoAlfa.png";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="arriba">
      <a href="#!">
        <img className="logoAlfa" onClick={() => navigate("/")} src={LogoAlfa} alt="logoAlfa" />
        <img className="logoChica" onClick={() => navigate("/")} src={Logochica} alt="logoChicaAlfa" />
      </a>
    </div>
  );
}
