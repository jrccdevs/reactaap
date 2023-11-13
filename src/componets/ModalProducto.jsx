import React, { useState, useEffect } from "react";
import { Modal/* , Button */} from "react-bootstrap";
import "../style/Productos2.css";
import Mensaje from "../img/Mensaje.jpg";


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
        <div className="col-12 col-sm-12 col-lg-12">
            <Modal className=""  show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                {/* <Modal.Header className="text-center" closeButton>
                    <Modal.Title className="modal-title">Laboratorio Alfa S.A.</Modal.Title>
                    <h6 className="comprendido">COMPRENDIDO</h6>
                </Modal.Header> */} 
                <Modal.Body /* style={{ backgroundColor: "rgb(158, 42, 42)", border:"3px solid #2a739e",borderRadius: "50px "}} */>
               {/*  <Button onClick={() => setShowModal(false)} style={{ backgroundColor: "rgb(158, 42, 42)", color: "blue"}}>COMPRENDIDO X</Button>
                <h6 className="comprendido" >COMPRENDIDO</h6>
                
               <Modal.Title className="modal-title"closeButton>Laboratorio Alfa S.A.</Modal.Title>*/}
               
        
<img className="" style={{ width: "100%" , height: "100%" }}   src={Mensaje} alt="" />
                    </Modal.Body>
                 {/* <Modal.Footer>
               
                </Modal.Footer> */} 
            </Modal>
        </div>
    );
}

export default ModalProducto;