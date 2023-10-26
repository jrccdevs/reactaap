import React, { useState, useEffect } from "react";
import { Modal/* , Button */} from "react-bootstrap";
import "../style/Productos2.css";
import LogoAlfa from "../img/LogoAlfa.png";


function ModalProducto() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasBeenShown = sessionStorage.getItem("modalShown");
        if (!hasBeenShown) {
            setShowModal(true);
            sessionStorage.setItem("modalShown", true);
        }
    }, []);

    return (
        <div>
            <Modal show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title className="modal-title">Laboratorio Alfa S.A.</Modal.Title>
                    <h6 className="comprendido">COMPRENDIDO</h6>
                </Modal.Header> 
                <Modal.Body /* style={{ backgroundColor: "rgb(158, 42, 42)", border:"3px solid #2a739e",borderRadius: "50px "}} */>
               {/*  <Button onClick={() => setShowModal(false)} style={{ backgroundColor: "rgb(158, 42, 42)", color: "blue"}}>COMPRENDIDO X</Button>
                <h6 className="comprendido" >COMPRENDIDO</h6>
                
               <Modal.Title className="modal-title"closeButton>Laboratorio Alfa S.A.</Modal.Title>*/}
               
              <p>  En estricto apego a las normas vigentes en nuestro País, promueve activamente el Uso Racional de los Medicamentos y la
consulta médica para el empleo de los mismos.</p>
<p>El uso de la información contenida en esta sección es de responsabilidad exclusiva del usuario y exime a Laboratorios Alfa
S.A. de cualquier responsabilidad por el uso indebido de la misma.</p>
<p>ANTES DE HACER USO DE LOS MEDICAMENTOS CONSULTE A SU MÉDICO.</p>
<img className="logomodal" style={{ width: "70px" , height: "70px", marginLeft:"90%" }}   src={LogoAlfa} alt="logoAlfa" />
                    </Modal.Body>
                 <Modal.Footer>
               
                </Modal.Footer> 
            </Modal>
        </div>
    );
}

export default ModalProducto;