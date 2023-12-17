import React, { useState, useEffect } from 'react';
import { BsTelephoneInbound } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import "../style/Footer.css";

export default function Footer() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez al montar el componente

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <>
    
      <div className="footer">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-12 text-center">
              <h4>
                <strong>OFICINA CENTRAL</strong>
              </h4>
              <p className="datosemp1">
                <BsTelephoneInbound /> (+591) 2224217
              </p>
              <p className="datosemp1">
                <MdMarkEmailRead /> alfa@alfabolivia.com
              </p>
              <p className="datosemp1">
                <FaMapMarkerAlt /> Calle 19 No. 100 (entre av. Francia y Enrique Hertzog) - Achumani, sector del Franco
              </p>
            </div>
            {/* <div className="col-12 col-md-6 col-sm-12 text-center">
              <h4>
                <strong>NUESTRAS REDES SOCIALES</strong>
              </h4>
              <h4 className="icono">
                <FaFacebook className="facebook" /> <FaTwitter className="twitter" /> <FaLinkedin className="linkedin" />
              </h4>
            </div> */}
          </div>

          <hr className="linea" />
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12 text-center mb-2">
              <h2 className="copyright"><strong>© Copyright {day} {month} {year}</strong></h2>
            </div>
          </div>
        </div>
      </div>
     
      
    </>
  );
}
