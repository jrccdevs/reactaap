import React from 'react';
import CarrucelHeader from './HeaderCarrucel';
import Busquedaprincipal from './Busquedaprincipal';
import Footer from './Footer';
import { FiCornerDownRight } from "react-icons/fi";
import construccion from "../img/MisionEmp.jpg";
import "../style/Empresa.css";
import flecha from "../img/flecha.png";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TableResize } from 'mui-datatables';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
//import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
    paper: {
        border: '6px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
const StyledMenuItem = withStyles((theme) => ({
    root: {
       
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);
export default function Empresa() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cincentados, setCincentados] = React.useState(null);
    const [sesentacuatro, setSesentacuatro] = React.useState(null);
    const [sesentacinco, setSesentacinco] = React.useState(null);
    const [ciete, setCiete] = React.useState(null);
    const [ochenta, setOchenta] = React.useState(null);
    const [seis, setSeis] = React.useState(null);
    const [tres, setTres] = React.useState(null);
    const [diez, setDiez] = React.useState(null);
    const [quince, setQuince] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

//clik para el 1952
    const Click = (event) => {
        setCincentados(event.currentTarget);
    };

    const Close = () => {
        setCincentados(null);
    };
//clik para el 1964
    const sesenClick = (event) => {
        setSesentacuatro(event.currentTarget);
    };
    const sesenClose = () => {
        setSesentacuatro(null);
    };
//clik para el 1965
const cincoClick = (event) => {
    setSesentacinco(event.currentTarget);
};
const cincoClose = () => {
    setSesentacinco(null);
};
//clik para el 1977
const cieteClick = (event) => {
    setCiete(event.currentTarget);
};
const cieteClose = () => {
    setCiete(null);
};
//clik para el 1980
const ochentaClick = (event) => {
    setOchenta(event.currentTarget);
};
const ochentaClose = () => {
    setOchenta(null);
};
//clik para el 1986
const seisClick = (event) => {
    setSeis(event.currentTarget);
};
const seisClose = () => {
    setSeis(null);
};
//clik para el 1993
const tresClick = (event) => {
    setTres(event.currentTarget);
};
const tresClose = () => {
    setTres(null);
};
//clik para el 2010
const diezClick = (event) => {
    setDiez(event.currentTarget);
};
const diezClose = () => {
    setDiez(null);
};
//clik para el 2015
const quinceClick = (event) => {
    setQuince(event.currentTarget);
};
const quinceClose = () => {
    setQuince(null);
};
    return (
        <div>
            <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
                <CarrucelHeader />
                <Busquedaprincipal />

            </div>
            <br></br>
            <div className="container" style={{ overflow: "hidden", margin: "190px auto 0px" }}>
                <div className="row">

                    <h4></h4>
                    <img src={construccion} width="300" height="300" className="rounded img-fluid" alt="..." />

                </div>
            </div>

            <h5 style={{marginLeft:"150px", color:"#003057", fontSize:"30px"}}>HISTORIA</h5>
            <br></br>
          <div style={{marginLeft:"180px"}}>
            <div style={{marginLeft:"80px"}}>
                <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)" , filter: "sepia(0)"}}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                      <h4 style={{ textAlign:"center", color:"white"  }}>1950</h4>  
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                   
                    El Dr. Santiago Ferrer Alsina, farmacéutico catalán, 
                            emigra a Bolivia (1950) e inicia su actividad
                         profesional en la Farmacia Española en la ciudad de La Paz, 
                         la cual se encontraba en la Plaza Murillo.
                     
                </StyledMenu>
            </div>
            <div>
           <div style={{marginLeft:"110px", marginTop:"5px"}}>
           <img style={{ width: "40px", height: "40px", filter: "sepia(0.15)" }} src={flecha} alt="" />
                <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.05)" }}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="rgb(17, 120, 189)"
                    onClick={Click}
                    
                >
                   <h4 style={{ textAlign:"center", color:"white"  }}>1952</h4>  
                </Button>
              
                <StyledMenu
                    id="customized-menu"
                    anchorEl={cincentados}
                    keepMounted
                    open={Boolean(cincentados)}
                    onClose={Close}
                >
                    El 20 de Marzo de 1952 se asocia con los Doctores José  Benet y Carlos Grau, 
                    ambos de origen catalán, para formar el Laboratorio Farmacéutico GRABESA; 
                    el cual se ubicaba en la calle Víctor Eduardo del Barrio de Miraflores 
                    de la ciudad de La Paz.
                   
                </StyledMenu>
            </div>
            </div>

            <div>
<div style={{marginLeft:"180px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.20)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.10)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={sesenClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1964</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={sesentacuatro}
         keepMounted
         open={Boolean(sesentacuatro)}
         onClose={sesenClose}
     >
           El año 1964 la sociedad se disuelve y el Dr. Santiago Ferrer
         adquiere la maquinaria, equipos  y marcas de Laboratorios GRABESA 
         para constituir su propia empresa.
        
     </StyledMenu>
 </div>
 </div>


 <div>
<div style={{marginLeft:"250px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.25)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.15)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={cincoClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1965</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={sesentacinco}
         keepMounted
         open={Boolean(sesentacinco)}
         onClose={cincoClose}
     >
        <p>El Dr. Santiago Ferrer Alsina funda la empresa unipersonal  
        LABORATORIOS ALFA (Marzo de 1965), con el propósito y la visión 
        emprendedora de transformarla posteriormente en una empresa familiar de 
        responsabilidad limitada.</p>


        <p>El nombre de la empresa se constituye a partir de los apellidos del fundador 
        (ALsina Ferrer y Asociados= ALFA).</p>

        
     </StyledMenu>
 </div>
 </div>

 <div>
<div style={{marginLeft:"320px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.30)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.20)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={cieteClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1977</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={ciete}
         keepMounted
         open={Boolean(ciete)}
         onClose={cieteClose}
     >
         Se transforma la empresa unipersonal en Sociedad de Responsabilidad Ltda. 
         con la integración, como socios accionistas, de la  esposa y los dos hijos 
         del  fundador.
        
     </StyledMenu>
 </div>
 </div>

 <div>
<div style={{marginLeft:"390px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.35)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.25)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={ochentaClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1980</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={ochenta}
         keepMounted
         open={Boolean(ochenta)}
         onClose={ochentaClose}
     >
        Se trasladan las instalaciones a su  nueva planta, 
        ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades.
        
     </StyledMenu>
 </div>
 </div>

 <div>
<div style={{marginLeft:"460px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.40)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.30)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={seisClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1986</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={seis}
         keepMounted
         open={Boolean(seis)}
         onClose={seisClose}
     >
       <p> Se crea la División de Fitoterapia y se lanza al mercado la línea de tés  Amancay®, 
        elaborados con plantas medicinales  con el objetivo de abrir un mercado de exportación. </p>
       <p> En la actualidad esta línea ha sido discontinuada temporalmente, 
        para gestionarla como una unidad de negocios independiente de la farmacéutica, 
        con áreas específicas separadas para su proceso de fabricación. </p>
        
     </StyledMenu>
 </div>
 </div>

 <div>
<div style={{marginLeft:"530px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.45)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.35)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={tresClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>1993</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={tres}
         keepMounted
         open={Boolean(tres)}
         onClose={tresClose}
     >
         <p>El 3 de Mayo de 1993 fallece el Dr. Santiago Ferrer en la ciudad de Santiago de Chile, 
         asumiendo la dirección de la empresa sus hijos, quienes ya trabajaban en la Empresa 
         desde el año 1982.</p>

         <p>En Octubre de 1993 la empresa es auspiciada por el Centro para la 
         Promoción de Exportaciones de países en desarrollo del Gobierno de  Holanda (CBI), 
         para asistir al seminario EXPRO IV realizado en Rotterdam.</p>

        
     </StyledMenu>
 </div>
 </div>

 <div>
<div style={{marginLeft:"600px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.50)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.40)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={diezClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>2010</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={diez}
         keepMounted
         open={Boolean(diez)}
         onClose={diezClose}
     >
        En Septiembre de 2010 se adquiere un terreno de 9.000 metros  cuadrados 
        para la construcción de la nueva planta  en la localidad de Achocalla, 
        intermedia entre la ciudad de El Alto y la ciudad de La Paz.  

        
     </StyledMenu>
 </div>
 </div>


 <div>
<div style={{marginLeft:"670px", marginTop:"5px"}}>
<img style={{ width: "40px", height: "40px", filter: "sepia(0.55)" }} src={flecha} alt="" />
     <Button style={{ width: "80px", height: "50px", backgroundColor:"rgb(17, 120, 189)", filter: "sepia(0.45)" }}
         aria-controls="customized-menu"
         aria-haspopup="true"
         variant="contained"
         color="rgb(17, 120, 189)"
         onClick={quinceClick}
         
     >
        <h4 style={{ textAlign:"center", color:"white"  }}>2015</h4>  
     </Button>
   
     <StyledMenu
         id="customized-menu"
         anchorEl={quince}
         keepMounted
         open={Boolean(quince)}
         onClose={quinceClose}
     >
        
        Abril 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, 
        iniciando la transformación de SRL a S.A.
        
     </StyledMenu>
 </div>
 </div> 

        </div>

            <Footer />
        </div>
    );
}



