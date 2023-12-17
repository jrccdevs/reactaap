import React, { useState, useEffect } from "react";

import { getEmpresaAlafa } from "../api/productosCar";

import CarrucelHeader from './HeaderCarrucel';
import Busquedaprincipal from './Principalbusqueda';
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
import "../style/Header.css";

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

const  grada = "none";
const [productos, setProductos] = useState([]);

const [busqueda, setBusqueda] = useState("");


useEffect(() => {
  async function loadProductos() {
    const response = await getEmpresaAlafa();
    setProductos(response.data);
  }
  loadProductos();
}, []);

const handleChangen = (e) => {
  setBusqueda(e.target.value);
  buscar(e.target.value);
};

let result = [];

const buscar = (e) => {
  if (!busqueda) {
    result = productos;
  } else {
    result = productos.filter((dato) =>
      dato.principioactivo
        .toLowerCase()
        .includes(busqueda.toLocaleLowerCase())
    );
  }
};

buscar();

console.log(result);


  const [selectedValue, setSelectedValue] = React.useState('z');

  const handleChangegren = (event) => {
    setSelectedValue(event.target.value);
  };

  const [expanded, setExpanded] = React.useState('panel50');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
   
      <div className="container-fluid" style={{ backgroundColor: "white", position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
        <div className="row">

          <div className="col-md-3" style={{ backgroundColor: "white", height: "100%" }}>
            <Link to={"/"}>
              <img className="logoAlfaprueba" style={{ width: "100%", paddingTop: "7px" }} src={ChicaAlfa} alt="" />
            </Link>
          </div>

          <div className="col-md-9" style={{ marginRight: "0px" }}>

            <div className="carrucel-header" style={{ backgroundColor: "white" }}>
              <CarrucelHeader />
            </div>


            <div className="busqueda-principal" style={{ backgroundColor: "white" }}>
              <Busquedaprincipal />
            </div>
          </div>

        </div>


      </div>

      <div className="empresa-resp col-12" style={{ marginTop: "220px" }}>

        <div style={{ backgroundColor: "white" }}>
          <img src={construccion} width="100%" height="auto" className="rounded img-fluid" alt="..." />

        </div>


        <div style={{ backgroundColor: "white" }}>
          <h5 style={{ marginBottom: "70px", textAlign: "center", color: "#003057", fontSize: "30px" }}>HISTORIA</h5>

        </div>
      </div>


      <div>
      {result.map((producto) => (
      <Container maxWidth='xl' key={producto.id}>
     
        <Grid container>
        {producto.identificador === 'A' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} className="acordion" aria-controls="panel1d-content" id="panel1d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "150px", color: lightBlue[900] }}
                  control={<div  ><BlueRadio
                    checked={selectedValue === 'a'}
                    onChange={handleChangegren}
                    value="a"
                    label="Male"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
                  /></div>} />

              </AccordionSummary>
              <AccordionDetails  >
                <Grid container>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography className="detalle-acordion-t" variant="body1" color="textSecondary">
                      <p style={{ marginTop: "15%", textAlign: "justify" }}>
                        {producto.descripcion}
                       </p>
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="imagen-grid">

                      <img
                        style={{ textAlign: "center" }} className="fondo-img" target="_blank" src={drferrer} alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
           )}
        </Grid>

        <Grid container>
        {producto.identificador === 'B' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "250px", color: teal[500] }}
                  control={<div><GreenRadio
                    checked={selectedValue === 'b'}
                    onChange={handleChangegren}
                    value="b"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
             
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion1" variant="body1" color="textSecondary">
                  {producto.descripcion}
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
             )}
        </Grid>

        <Grid container>
        {producto.identificador === 'C' && (
          <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "350px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'c'}
                    onChange={handleChangegren}
                    value="c"
                    style={{ backgroundColor:  blue['A400'] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion2" variant="body1" color="textSecondary">
                {producto.descripcion}
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'D' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel4d-content" id="panel4d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "450px", color: lightBlue[900] }}
                  control={<div><BlueRadio
                    checked={selectedValue === 'd'}
                    onChange={handleChangegren}
                    value="d"
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion3" variant="body1" color="textSecondary">
                  <p> {producto.descripcion} </p>

                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'E' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "550px", color: teal[500] }}
                  control={<div><GreenRadio
                    checked={selectedValue === 'e'}
                    onChange={handleChangegren}
                    value="e"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion4" variant="body1" color="textSecondary">
                <p> {producto.descripcion} </p>
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'F' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio}  style={{ marginLeft: "650px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'f'}
                    onChange={handleChangegren}
                    value="f"
                    style={{ backgroundColor:  blue['A400'] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'F' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion5" variant="body1" color="textSecondary">
                <p> {producto.descripcion} </p>
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
           )}
        </Grid>

        <Grid container>
        {producto.identificador === 'G' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "750px", color: lightBlue[900] }}
                  control={<div><BlueRadio
                    checked={selectedValue === 'G'}
                    onChange={handleChangegren}
                    value="g"
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'G' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion6" variant="body1" color="textSecondary">
                <p> {producto.descripcion} </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'H' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" style={{ marginLeft: "850px", color: teal[500] }} value="female" label={producto.anio}
                  control={<div><GreenRadio
                    checked={selectedValue === 'h'}
                    onChange={handleChangegren}
                    value="h"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'H' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion7" variant="body1" color="textSecondary">
                <p> {producto.descripcion} </p>
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container >
        {producto.identificador === 'II' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} disabled>
         
            <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel  className="color-fecha" style={{ marginLeft: "950px", color: blue['A400'] }} value="female" label={producto.anio}
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'i'}
                    onChange={handleChangegren}
                    value="i"
                    style={{ backgroundColor:  blue['A400'] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'I' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails >
                <Typography className="detalle-acordion8" variant="body1" color="textSecondary">
                 {producto.descripcion}
             </Typography>
              </AccordionDetails>
            </Accordion>
           
          </Grid>
          )}
        </Grid>

        <Grid container >
        {producto.identificador === 'JJ' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} disabled>
         
            <Accordion square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel  className="color-fecha" style={{ marginLeft: "1050px", color: lightBlue[900] }} value="female" label={producto.anio}
                  control={<div><BlueRadio
                    checked={selectedValue === 'j'}
                    onChange={handleChangegren}
                    value="j"
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'J' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails >
                <Typography className="detalle-acordion9" variant="body1" color="textSecondary">
               <p>{producto.descripcion} </p> 
               <img
                        style={{ textAlign: "center" }} className="fondo-img" target="_blank" src={producto.estado} alt=""
                      />
             </Typography>
              </AccordionDetails>
            </Accordion>
            
          </Grid>
           )}
        </Grid>
        
        <Grid container >
        {producto.identificador === 'K' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} disabled>
            <Accordion square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
              <AccordionSummary style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel  className="color-fecha" style={{ marginLeft: "950px", color: teal[500] }} value="female" label={producto.anio}
                  control={<div><GreenRadio
                    checked={selectedValue === 'k'}
                    onChange={handleChangegren}
                    value="k"
                    style={{ backgroundColor: teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'k' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails >
                <Typography className="detalle-acordion8" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
           )}
        </Grid>

        <Grid container>
        {producto.identificador === 'L' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" style={{ marginLeft: "850px", color: teal[500] }} value="female" label={producto.anio}
                  control={<div><GreenRadio
                    checked={selectedValue === 'l'}
                    onChange={handleChangegren}
                    value="l"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'L' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion7" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'M' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "750px", color: lightBlue[900] }}
                  control={<div><BlueRadio
                    checked={selectedValue === 'M'}
                    onChange={handleChangegren}
                    value="m"
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'M' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion6" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'N' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "650px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'n'}
                    onChange={handleChangegren}
                    value="n"
                    style={{ backgroundColor:  blue['A400'] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'N' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion5" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'O' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
              <AccordionSummary   style={{ display: producto.accion ? 'flex' : 'none' }}  aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "550px", color: teal[500] }}
                  control={<div><GreenRadio
                    checked={selectedValue === 'o'}
                    onChange={handleChangegren}
                    value="o"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'O' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion4" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
             )}
        </Grid>

        <Grid container>
        {producto.identificador === 'P' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel4d-content" id="panel4d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "450px", color: lightBlue[900] }}
                  control={<div><BlueRadio
                    checked={selectedValue === 'p'}
                    onChange={handleChangegren}
                    value="p"
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'P' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion3" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
            )}
        </Grid>
        
        <Grid container>
        {producto.identificador === 'Q' && (
          <Grid itemxs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel3d-content" id="panel3d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "350px", color: blue['A400'] }}
                  control={<div><BlueGreyRadio
                    checked={selectedValue === 'q'}
                    onChange={handleChangegren}
                    value="q"
                    style={{ backgroundColor:  blue['A400'] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
  
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'Q' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion2" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>

        <Grid container>
        {producto.identificador === 'R' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
              <AccordionSummary   style={{ display: producto.accion ? 'flex' : 'none' }} aria-controls="panel2d-content" id="panel2d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio}  style={{ marginLeft: "250px", color: teal[500] }}
                  control={<div><GreenRadio
                    checked={selectedValue === 'r'}
                    onChange={handleChangegren}
                    value="r"
                    style={{ backgroundColor:  teal[500] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
             
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'R' }}
                  /></div>} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="detalle-acordion1" variant="body1" color="textSecondary">
                <p>{producto.descripcion} </p> 
             </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
            )}
        </Grid>

        <Grid container>
        {producto.identificador === 'S' && (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion square expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
              <AccordionSummary  style={{ display: producto.accion ? 'flex' : 'none' }}className="acordion" aria-controls="panel1d-content" id="panel1d-header">
                <FormControlLabel className="color-fecha" value="female" label={producto.anio} style={{ marginLeft: "150px", color: lightBlue[900] }}
                  control={<div  ><BlueRadio
                    checked={selectedValue === 's'}
                    onChange={handleChangegren}
                    value="s"
                    label="Male"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'S' }}
                    style={{ backgroundColor:  lightBlue[900] , width:"15px", height:"15px", marginBottom:"8px"}} // Establecer el color de fondo
                  /></div>} />

              </AccordionSummary>
              <AccordionDetails  >
                <Grid container>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography className="detalle-acordion-t" variant="body1" color="textSecondary">
                  
                      <p>{producto.descripcion} </p> 
                         </Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="imagen-grid">

                      <img
                        style={{ textAlign: "center" }} className="fondo-img" target="_blank" src={drferrer} alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          )}
        </Grid>  
        
      </Container>
      ))}
     </div>
     
      
      <div className="principal-footer mb-12 mt-12">
         <Footer />
      </div>
       
    </>
  );
}



