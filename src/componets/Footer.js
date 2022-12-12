import { BsTelephoneInbound } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt, FaFacebook, FaTwitter } from "react-icons/fa";

import React from "react";
import "../style/Footer.css";

export default function Footer() {
    return (
        // <div className="footer">
        //     <div className="texto">
        //     © Copyright 2022
        //     </div>
        // </div>

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-6 col-md-6 text-center">
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
                                <FaMapMarkerAlt /> Av. Busch #1970 Miraflores
                            </p>
                        </div>
                        <div className="col-6 col-md-6 text-center">
                            <h4>
                                <strong>NUESTRAS REDES SOCIALES</strong>
                            </h4>
                            <h4 className="icono">
                                <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
                            </h4>
                        </div>
                    </div>
                </div>

                <hr className="linea" />
                <div className="row">
                    <div className="col-6 col-md-12 text-center mb-2">
                        <h2>© Copyright 2022</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
