
import React from 'react';
import { FaCaretDown, FaListAlt, FaProductHunt } from 'react-icons/fa';
import { Button } from "@mui/material"

import axios from 'axios'
import { useNavigate } from 'react-router';

function PanelControl() {
 
  const navigate = useNavigate();


  const cerrarSesion = async() =>{
    console.log(" cerrando sesion")
    await axios.get(`http://localhost:7000/logout`)
    .then((result) =>{
      console.log("cerrado", result.data, result.status, result.text)
      //return <Redirect to="/" />;
      result.clear();
        navigate("/../login");
    })
   
    .catch((error) => {
      console.log(error)
    })
     }
  return (

    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Laboratorio ALFA</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item" >
                <a href="/#" className="nav-link align-middle px-0">
                  <i><FaProductHunt /></i> <span className="ms-1 d-none d-sm-inline">Productos</span>
                </a>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i><FaListAlt /></i> <span className="ms-1 d-none d-sm-inline">Dashboard </span> <FaCaretDown /> </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                  </li>
                  <li>
                    <a href="/#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                <span className="d-none d-sm-inline mx-1">ADMIN</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="/#">Perfil</a></li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Button
							fullWidth
							variant='contained'
							className="login-button"
							onClick={cerrarSesion}
						>
							Cerrar Sesion
						</Button>   </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          <h3>Laboratorio</h3>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia molestiae laborum ratione sapiente perspiciatis necessitatibus possimus, sunt eaque ad, corrupti debitis maxime aperiam labore mollitia, blanditiis atque quaerat! Facere, voluptatum!</p>
          {/* <ul className="list-unstyled">
            <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default PanelControl;
