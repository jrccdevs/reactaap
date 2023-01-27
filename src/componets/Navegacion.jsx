import React from "react";
import Empresa from "../img/imgempresa.png";
import Productos from "../img/imgProductos.png";
import Farmacovigilancia from "../img/imgFarmacovigilancia.png";
import Vademecum from "../img/imgVademecum.png";
import { useNavigate, Link } from "react-router-dom";
import LogoAlfa from "../img/LogoAlfa.png";

import "../style/Navegacion.css";

export default function Navegacion() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <section className="col-12 col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <img
                  onClick={() => navigate("/empresa")}
                  className="fondo-img"
                  src={Empresa}
                  alt="Empresa"
                />
              </div>
            </div>

            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <img
                  onClick={() => navigate("/productos")}
                  className="fondo-img"
                  src={Productos}
                  alt="Productos"
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/es/farmaco-vigilancia">
                  <img className="fondo-img" src={Farmacovigilancia} alt="" />
                </Link>
              </div>
            </div>

            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/vademecun">
                  <img
                    className="fondo-img"
                    target="_blank"
                    src={Vademecum}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="col-12 col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-lg-12 mt-4 abajo">
              <div className="container2">
                <h1>Laboratorios Alfa</h1>
                <img className="logoAlfa" src={LogoAlfa} width="30%" height="30%" alt="logoAlfa" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dictum arcu sed erat fringilla placerat. Proin fringilla lacinia
                risus sed porttitor. Quisque tincidunt lectus vitae massa
                vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam
                erat volutpat. Praesent cursus quam purus, sed scelerisque orci
                tincidunt in. Donec a neque facilisis, lobortis tellus vitae,
                dictum nisl. Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar
                massa ut, ullamcorper magna. Cras tempus, sapien eu rutrum
                dictum, nisi neque congue sapien, eu aliquet neque felis
                molestie urna. Suspendisse ut egestas purus, id commodo dolor.
                Praesent vel magna ut augue tristique iaculis. Aenean a turpis
                dui. Pellentesque at ullamcorper magna. Aenean accumsan enim
                quis est ultricies tristique. Donec hendrerit lorem luctus
                sollicitudin sodales. Proin lacinia magna a venenatis blandit.
                Vestibulum ac odio ac tortor laoreet tempus. Maecenas eget
                suscipit est, eget condimentum lectus. Nam convallis maximus
                mauris mattis bibendum. Pellentesque at velit vestibulum,
                egestas lectus iaculis, molestie lorem. Morbi aliquet enim
                velit, ut vulputate lacus suscipit a. Quisque efficitur nisl
                vitae libero euismod, at imperdiet mi gravida. Quisque dui nisi,
                accumsan in finibus at, gravida a eros. In sit amet libero vitae
                lectus molestie sollicitudin non sed lectus. Nulla volutpat,
                elit et lacinia venenatis, lacus leo maximus ex, a pharetra orci
                enim fermentum ex. Curabitur sit amet pulvinar dolor. In ac
                justo sollicitudin, pulvinar leo vitae, ullamcorper massa.
                Pellentesque feugiat accumsan scelerisque. Nunc nec ex non massa
                hendrerit consectetur ac et dolor. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Suspendisse quis gravida erat, sed ullamcorper purus. Maecenas
                consequat faucibus nisl, ac tempor lacus. Maecenas ullamcorper
                pharetra rhoncus. Sed nec auctor ligula. Nunc commodo augue
                ligula, non interdum lectus laoreet ac. Proin fermentum
                imperdiet interdum. Pellentesque id dapibus enim, ullamcorper
                lacinia purus. Praesent imperdiet vestibulum enim sed vulputate.
                Donec pulvinar leo sed mauris lobortis mattis. Curabitur
                faucibus sit amet diam id posuere. Nunc mollis nunc vel est
                pharetra facilisis. Suspendisse neque augue, sodales non
                suscipit nec, egestas sed erat. Ut eu mattis turpis. Aenean
                porta dui vitae velit suscipit eleifend. Integer ac arcu quis
                nulla faucibus rutrum id quis lacus. Donec tempus nisi et tortor
                cursus accumsan. Aliquam molestie eget libero a laoreet. Integer
                in condimentum urna. Nam eu egestas eros. Praesent posuere,
                ipsum eget suscipit efficitur, mi felis aliquet eros, in aliquet
                nibh enim mattis massa.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
