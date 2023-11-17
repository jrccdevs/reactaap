import React, { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import LogoRes from "../img/LogoAlfa.png";
import "../style/navbar.css";


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
  
  export default function PrincipalBusqueda() {

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


    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    }; 

  
  return (
    <nav className="nav">
      <a href="!#" className="nav__brand">
    {/*   <img className="logo-responsivo" style={{width:"40%", height:"auto"}} src={LogoRes} alt="" />
  */}             
      </a>
      <div className={active}>
                <select className="nav__item form-select col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  onChange={(e) => handleFormaFarmace(e)}>
                <option disabled selected hidden className="nav__option">FORMA FARMACEUTICA</option>
                  <option value={''}>MOSTRAR TODOS </option>
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
                <Form className="nav__buscador d-flex" >
                  <Form.Control
                  onChange={(e) => buscarProductos(e.target.value)}
                      
                    type="search"
                    placeholder="Buscador de Productos"
                    className="nav-control me-2"
                    aria-label="Search"
                  />
                  <Button className="nav__lupa" onClick={handleRedirect} variant="primary"><FaSearch></FaSearch></Button>
                  <div className="position-absolute" style={{ maxWidth: "280px", marginTop: "56px", marginRight: "60px" }}>

{productosMatch && productosMatch.slice(0, 5).map((item, index) => (
  <div key={index} className="lista-productos">
    <div key={item.id} className="producto-item">
      {/* <Link to={`/productos/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> */}
      <Link to={`/productos/${item.id}/page/1`} style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => buscarProductos("")}>
        <div className=" mb-3 " style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="imagen-buscador col-md-3 col-3">
              <img src={item.image}  className="img-fluid rounded-start" alt={item.nombreproducto} />
            </div>
            <div className=" col-md-9 col-9">
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
               
              </div>

     
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
 );
}