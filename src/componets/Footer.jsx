import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {Container, Grid} from "@mui/material"
import "../style/Footer.css";

export default function Footer() {
  return (
    <>
    <Container sx={{paddingLeft: "0px", paddingRight: "0px", width: "100vw"}} maxWidth={false} disableGutters={true}>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className="footer">
        <div className="container mt-4">
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
                <FaMapMarkerAlt /> Av. Busch #1970 Miraflores
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
              <h2 className="copyright"><strong>© Copyright 2022</strong></h2>
            </div>
          </div>
        </div>
      </div>
      </Grid>
      </Grid>
      </Container>
    </>
  );
}
