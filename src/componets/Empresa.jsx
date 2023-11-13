import React, { useState, useEffect } from "react";
import CarrucelHeader from './HeaderCarrucel';
import Busquedaprincipal from './Busquedaprincipal';
import Footer from './Footer';
import gradas from "../img/Grada.jpg";
import construccion from "../img/MisionVision.jpg";
import drferrer from "../img/DrFerrer.jpg";
import { Modal, Row, Col } from "react-bootstrap";
import ImageMapResizer from 'image-map-resizer';
import Menu from '@material-ui/core/Menu';
import { Container, Box, Grid, Paper } from "@mui/material"
import { withStyles, styled } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { teal, blue, lightBlue, red, green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from "react-router-dom";
import ChicaAlfa from "../img/ChicaALFA.JPG";
import "../style/Empresa.css";


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {

  },
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {

  },
  [theme.breakpoints.up('xs')]: {

  },
}));


const BlueRadio = withStyles({
  root: {
    color: lightBlue[900],
    '&$checked': {
      color: lightBlue[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GreenRadio = withStyles({
  root: {
    color: teal[500],
    '&$checked': {
      color: teal[500],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlueGreyRadio = withStyles({
  root: {
    color: blue['A400'],
    '&$checked': {
      color: blue['A400'],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);





const Accordion = withStyles({
  root: {
    border: '0px solid white',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'white',
    height: '12px',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '1px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


export default function Empresa() {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChangegren = (event) => {
    setSelectedValue(event.target.value);
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>

      <div className="container-fluid" style={{ backgroundColor: "white", position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
        <div className="row">

          <div className="col-md-3" style={{ backgroundColor: "white", height: "100%" }}>
            <Link to={"/"}>
              <img className="logoAlfaprueba" style={{ width: "100%", paddingTop: "18px" }} src={ChicaAlfa} alt="" />
            </Link>
          </div>

          <div className="col-md-9" style={{ marginRight: "0px" }}>

            <div style={{ backgroundColor: "lightgreen" }}>
              <CarrucelHeader />
            </div>


            <div style={{ backgroundColor: "lightgreen" }}>
              <Busquedaprincipal />
            </div>
          </div>

        </div>


      </div>

      <div className="col-12" style={{ marginTop: "220px" }}>

        <div style={{ backgroundColor: "white" }}>
          <img src={construccion} width="100%" height="auto" className="rounded img-fluid" alt="..." />

        </div>


        <div style={{ backgroundColor: "white" }}>
          <h5 style={{ marginBottom: "70px", textAlign:"center", color: "#003057", fontSize: "30px" }}>HISTORIA</h5>

        </div>
      </div>


     
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary className="acordion"  aria-controls="panel1d-content" id="panel1d-header">
                <FormControlLabel className="color-fecha" value="female" label="1950" style={{marginLeft: "120px", color: lightBlue[900] }}
                  control={<div  ><BlueRadio 
                    checked={selectedValue === 'a'}
                    onChange={handleChangegren}
                    value="a"
                    label="Male"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  /></div>} />

              </AccordionSummary>
              <AccordionDetails  >
              <Grid container>
                <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                  <Typography >
                    <p style={{ marginTop: "15%", textAlign:"justify" }}>El Dr. Santiago Ferrer Alsina, farmacéutico catalán, emigra a Bolivia (1950) e inicia su actividad profesional en la Farmacia Española en la ciudad de La Paz, la cual se encontraba en la Plaza Murillo."</p>
                  </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className="imagen-grid">

                    <img
                     style={{textAlign:"center"}} className="fondo-img" target="_blank" src={drferrer} alt=""
                    />
                  </div>
                </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label="1952" style={{marginLeft: "200px", color: teal[500] }}
                  control={<div><GreenRadio 
                    checked={selectedValue === 'b'}
                    onChange={handleChangegren}
                    value="b"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  " El 20 de Marzo de 1952 se asocia con los Doctores José  Benet y Carlos Grau, ambos de origen catalán, para formar el Laboratorio Farmacéutico GRABESA."

             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label="1964" style={{marginLeft: "300px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio 
                    checked={selectedValue === 'c'}
                    onChange={handleChangegren}
                    value="c"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  "El año 1964 la sociedad se disuelve y el Dr. Santiago Ferrer adquiere la maquinaria, equipos  y marcas de Laboratorios GRABESA  para constituir su propia empresa."

             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <FormControlLabel className="color-fecha" value="female" label="1965" style={{ marginLeft: "400px", color: lightBlue[900] }}
                  control={<div><BlueRadio 
                    checked={selectedValue === 'd'}
                    onChange={handleChangegren}
                    value="d"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>El Dr. Santiago Ferrer Alsina funda la empresa unipersonal
                  LABORATORIOS ALFA (Marzo de 1965), con el propósito y la visión
                  emprendedora de transformarla posteriormente en una empresa familiar de
            responsabilidad limitada.<br></br>El nombre de la empresa se constituye a partir de los apellidos del fundador
            (ALsina Ferrer y Asociados= ALFA).</p>

                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label="1977" style={{marginLeft: "500px" , color: teal[500] }}
                  control={<div><GreenRadio 
                    checked={selectedValue === 'e'}
                    onChange={handleChangegren}
                    value="e"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  " Se transforma la empresa unipersonal en Sociedad de Responsabilidad Ltda. con la integración, como socios accionistas, de la  esposa y los dos hijos del  fundador."

             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label="1980" style={{marginLeft: "600px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio 
                    checked={selectedValue === 'f'}
                    onChange={handleChangegren}
                    value="f"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'F' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  "Se trasladan las instalaciones a su  nueva planta,  ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades."

             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label="1993" style={{marginLeft: "700px", color: lightBlue[900] }}
                  control={<div><BlueRadio 
                    checked={selectedValue === 'G'}
                    onChange={handleChangegren}
                    value="g"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'G' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>El 3 de Mayo de 1993 fallece el Dr. Santiago Ferrer en la ciudad de Santiago de Chile,
                  asumiendo la dirección de la empresa sus hijos, quienes ya trabajaban en la Empresa
                  desde el año 1982. En Octubre de 1993 la empresa es auspiciada por el Centro para la
                  Promoción de Exportaciones de países en desarrollo del Gobierno de  Holanda (CBI),
            para asistir al seminario EXPRO IV realizado en Rotterdam.</p>

                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" style={{ marginLeft: "800px", color: teal[500] }} value="female" label="2015" 
                  control={<div><GreenRadio 
                    checked={selectedValue === 'h'}
                    onChange={handleChangegren}
                    value="h"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'H' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  "  Abril 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de SRL a S.A."

             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" style={{ marginLeft: "900px", color: blue['A400']}} value="female" label="2024"
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'i'}
                    onChange={handleChangegren}
                    value="i"
                    backgroundColor="red"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'I' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

      </Container>


      <Footer />
    </>
  );
}



