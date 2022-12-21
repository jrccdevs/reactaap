import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineFunnelPlot } from "react-icons/ai";
import { GiMedicalThermometer } from "react-icons/gi";
import { FaTable } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import BusquedaProductoDetalle from "./BusquedaProductoDetalle";
import "../style/Productos.css";

export default function DetalleProducto() {
  //   console.log(useParams());

  const { id } = useParams();
  console.log(id);

  const [usuario, setUsuario] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://node-alfa.vercel.app/productos/${id}`);
      const user = await data.json();
      //   console.log(user);
      setUsuario(user);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <BusquedaProductoDetalle />
      <div class="container">
        <div class="card mb-3">
          {usuario.map((producto) => (
            <div class="row g-0">

              {/* <div class="col-md-6">
                <img src={producto.image} class="imagen img-fluid rounded-start" alt="..." />
              </div> */}

              <div className="div-producto2 col-md-6 col-12">
                <a href="#!">
                  <img
                    className="img-productos"
                    src={producto.image}
                    alt=""
                  />
                </a>
              </div>

              <div class="col-md-6 ">
                <div class="card-body">

                  {/* <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p> */}

                  <h5 className="titulo card-title text-center">
                    {producto.nombreproducto}
                  </h5>
                  <div className="card-centro">
                    <h6 className="detalle" style={{ color: "red" }}> <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                      Precio:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} Bs. {producto.precio}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "red" }}> <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                      Principio Activo:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} {producto.principioactivo}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "#2062f0" }}>
                      <GiMedicalThermometer></GiMedicalThermometer>{" "}
                      Accion Terapectica:
                      <text style={{ color: "  #5187fc" }}>
                        {" "} {producto.accionterapeutica}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "rgb(65, 67, 68)" }}>
                      <FaTable></FaTable> Forma Farmaceutica:
                      <text style={{ color: "rgb(159, 163, 165)" }}>
                        {" "}
                        {producto.formafarmaceutica}{" "}
                      </text>
                    </h6>

                    <h6 className="detalle" style={{ color: "rgb(65, 67, 68)" }}>
                      <FaTable></FaTable> Presentacion:
                      <text style={{ color: "rgb(159, 163, 165)" }}>
                        {" "}
                        {producto.presentacion}{" "}
                      </text>
                    </h6>

                    <h5 className="detalle" style={{ color: "green", textAlign: "center" }}>
                      <button className="btn btn-success" >VER MAS (Prospecto)</button>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <Footer />
    </>
  );
}
