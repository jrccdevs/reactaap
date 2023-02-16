import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

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
                    <Modal.Title>Laboratorio Alfa S.A.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                En estricto apego a las normas vigentes en nuestro País, promueve activamente el Uso Racional de los Medicamentos y la
consulta médica para el empleo de los mismos.
El uso de la información contenida en esta sección es de responsabilidad exclusiva del usuario y exime a Laboratorios Alfa
S.A. de cualquier responsabilidad por el uso indebido de la misma.
ANTES DE HACER USO DE LOS MEDICAMENTOS CONSULTE A SU MÉDICO.
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalProducto;