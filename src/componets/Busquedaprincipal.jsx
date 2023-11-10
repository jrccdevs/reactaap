import React, { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";
import labalfa from "../img/labalfa.png";
import Logochica from "../img/imgLogochica.png";

import "../style/Header.css";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() =>{
    callbackRef.current = cb;
  });

  useEffect(() =>{
    function handle(event){
      if(event.code === key){
        callbackRef.current(event)
      }
    }
    document.addEventListener("keypress",handle );
    return () => document.removeEventListener("keypress", handle);
  },[key]);
}

export default function BusquedaPrincipal() {
 
  const Busqueda = useNavigate();

  const [formafarmaceutica, setformafarmaceuticaid] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosMatch, setProductosMatch] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  // const handleFormaFarmace = (event) => {
  //   const getformafarmaceuticaid = event.target.value;
  //   setformafarmaceuticaid(getformafarmaceuticaid);
  //   event.preventDefault();
  // }

  const navigate = useNavigate();

  const handleFormaFarmace = (event) => {
    const selectedValue = event.target.value;
    // console.log(selectedValue);
    navigate(`/productos?selectedValue=${selectedValue}`);
    event.preventDefault();
  }



  // useEffect(() => {
  //   async function loadProductos() {
  //     const response = await getProductosRequest();
  //     setProductos(response.data.slice(0, 5));
  //   }
  //   loadProductos();
  // }, []);

  useEffect(() => {
    const getstate = async () => {
      const response = await fetch(`https://node-alfa.vercel.app/formaFarmaceutica/${formafarmaceutica}`);
      const getst = response.json();
      setProductos(await getst);
      // console.log(getst);
    }
    getstate();
  }, [formafarmaceutica]);


  // console.log(productos);

  const buscarProductos = (text) => {
    if (!text) {
      setProductosMatch([]);
    } else {
      let matches = productos.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          country.nombreproducto.match(regex) ||
          country.principioactivo.match(regex)
        );
      });
      setProductosMatch(matches);

      setSearchText(text); // guardamos el valor del input en el estado searchText
    }
  };

  const handleRedirect = () => {
    // navigate("/productos", { state: { searchText } });
    navigate(`/productos?searchProcut=${searchText}`);

    // pasamos el valor del input guardado en el estado searchText a la función Busqueda
  };

  
  useKey("Enter", handleRedirect)
  return (
    
    <div className="arribainicio">
      {/* <div className="arriba">
       
         <a href="#!">
           <img className="logoAlfa" onClick={() => navigate("/")} src={LogoAlfa} alt="logoAlfa" />
           <img className="logoChica" onClick={() => navigate("/")} src={Logochica} alt="logoChicaAlfa" />
         </a>
       </div> */}
      
      {['lg'].map((expand) => (
         
        
        <Navbar key={expand} variant="dark" expand={expand} className="fijo mb-3 nav-bar">
          
          <Container fluid>
         
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Body className="row justify-content-center ">
                {/* <Nav className="justify-content flex-grow-1 pe-3">
                    <Button href="/menuadmin" variant="primary">ADMINISTRADOR</Button>
                  </Nav> */}

                <section className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-3 me-2" >
                  <select className="form-select" style={{width:"225px", marginLeft:"-20px"}} aria-label="Default select example"  onChange={(e) => handleFormaFarmace(e)}>
                    <option className="mostrar-pro"  value={''} disabled selected hidden>FORMA FARMACEUTICA</option>
                    <option value="CAPSULAS">CÁPSULAS</option>
                    <option value="COMPRIMIDOS">COMPRIMIDOS</option>
                    <option value="CREMAS">CREMAS</option>
                    <option value="GEL">GEL</option>
                    <option value="GOTAS">GOTAS</option>
                    <option value="GRANULADO">GRANULADO</option>
                    <option value="INYECTABLE">INYECTABLE</option>
                    <option value="JARABES">JARABES</option>
                    <option value="POLVO">POLVO</option>
                    <option value="POMADA">POMADA</option>
                    <option value="SHAMPO">SHAMPOO</option>
                    <option value="SOLUCION">SOLUCIÓN</option>
                    <option value="SUPOSITORIO">SUPOSITORIO</option>
                    <option value="SUSPENSION">SUSPENSIÓN</option>
                    <option value="TABLETAS">TABLETAS</option>
                  </select>
                </section>

                <section className="busquer col-12 col-sm-12 col-md-12 col-lg-6" >
                  <Form className="tamanio-buscador d-flex"  style={{ marginRight:"-50px"}} >
                    
                    <Form.Control
                      onChange={(e) => buscarProductos(e.target.value)}
                      
                      type="text"
                      placeholder="Buscador de Productos"
                      className="me-2"
                      aria-label="Search"
                    />

                    <Button variant="primary" onClick={handleRedirect}   ><FaSearch /></Button>

                    <div className="position-absolute" style={{ maxWidth: "100%", marginTop: "56px", marginRight: "60px" }}>

                      {productosMatch && productosMatch.slice(0, 5).map((item, index) => (
                        <div key={index}>
                          <div key={item.id} className="producto-item">
                            {/* <Link to={`/productos/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> */}
                            <Link to={`/productos/${item.id}/page/1`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                              <div className="mb-3 " style={{ maxWidth: "100%" }}>
                                <div className="row g-0">
                                  <div className="col-md-3 col-3">
                                    <img src={item.image} style={{ maxWidth: "50%", maxHeight: "80%", display: "block", margin: "0 auto" }} className="img-fluid rounded-start" alt={item.nombreproducto} />
                                  </div>
                                  <div className="col-md-9 col-9">
                                    <div className="text-left" >
                                      <h6 className="textobuscador" >{item.nombreproducto}</h6>
                                      <h6 className="textobuscador" >{item.precio}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                  </Form>
                </section>
              </Offcanvas.Body>
            </Navbar.Offcanvas>


          {/*    <Navbar.Brand href="#">  <Nav className="justify-content flex-grow-1 pe-3">
                <Button onClick={() => Busqueda("/menuadmin")} variant="primary">ADMINISTRADOR</Button> 
            </Nav></Navbar.Brand>   */}
      
            <Navbar.Brand href="#" className="panelControl">  <Nav className="justify-content flex-grow-1 pe-3">
           {/*    <Button onClick={() => Busqueda("/login")} variant="primary">Iniciar Sesion</Button>
    */}         </Nav></Navbar.Brand>

            <Navbar.Brand href="#" className="panelControl">  <Nav className="justify-content flex-grow-1 pe-3">
            {/*   <Button onClick={() => Busqueda("/panelControl")} variant="success">Panel Control</Button>
        */}     </Nav></Navbar.Brand>

          </Container>
        </Navbar>
      ))
      }
    </div>
  );
}

