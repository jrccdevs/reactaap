import React from "react";
import mapa from "../img/mapa-sucursales.png";

export default function Maps() {

  return (
    <div className="container">
      <div className="row">
        <section className="col-12">
          {/* <div className="row"> */}
          {/* Sucursales de bolivia */}
          <div className="col-lg-12 text-center">
            <h4 className="text-center my-4">SUCURSALES BOLIVIA</h4>

            <img className="img-fluid" src={mapa} width="652" height="682" alt="sucursales-bolivia" useMap="#Map" />
            <map name="Map">
              <area shape="circle" coords="417,319,17" href="#" alt="santa_cruz" data-bs-toggle="modal" data-bs-target="#modalf1" />
              <area shape="circle" coords="236,182,17" href="#" alt="beni" data-bs-toggle="modal" data-bs-target="#modalf2" />
              <area shape="circle" coords="134,49,17" href="#" alt="pando" data-bs-toggle="modal" data-bs-target="#modalf3" />
              <area shape="circle" coords="91,240,17" href="#" alt="la_paz" data-bs-toggle="modal" data-bs-target="#modalf4" />
              <area shape="circle" coords="215,327,17" href="#" alt="cochabamba" data-bs-toggle="modal" data-bs-target="#modalf5" />
              <area shape="circle" coords="136,391,17" href="#" alt="oruro" data-bs-toggle="modal" data-bs-target="#modalf6" />
              <area shape="circle" coords="193,464,17" href="#" alt="potosi" data-bs-toggle="modal" data-bs-target="#modalf7" />
              <area shape="circle" coords="292,429,17" href="#" alt="chuquisaca" data-bs-toggle="modal" data-bs-target="#modalf8" />
              <area shape="circle" coords="267,531,17" href="#" alt="tarija" data-bs-toggle="modal" data-bs-target="#modalf9" />
              {/* <area shape="rect" coords="691,336,1239,375" title="Offer Details" alt="Offer Details" data-toggle="modal" data-target="#myModal" style="outline:none" /> */}
            </map>


            {/* Modal de sucursales bolivia */}
            <div className="modal fade" id="modalf1" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Santa Cruz</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-4">Calle Las Piñas Nº 2157 esq. Los Mangos (3er. anillo interno)</div>
                        <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf2" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Beni</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal beni
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf3" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Pando</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal pando
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf4" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal La Paz</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de la paz
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf5" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Cochabamba</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de cochabamba
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf6" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Oruro</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de oruro
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf7" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Potosi</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de potosi
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf8" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Chuquisaca</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de chuquisaca
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalf9" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sucursal Tarija</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Direcion de la sucursal de tarija
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* fin modal de sucursales bolivia */}
          {/* </div> */}
        </section>
      </div>
    </div>
  )
};