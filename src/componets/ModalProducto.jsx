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
                    <Modal.Title>Laboratorio ALFA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus porttitor enim, eu lobortis nisl suscipit eu. Maecenas id tellus fringilla lectus pretium gravida. Morbi ullamcorper scelerisque massa, id convallis nulla vulputate at. Proin ut dignissim sapien. Maecenas nibh justo, pretium non sapien vel, blandit finibus mi. Aenean vitae ornare dolor. Morbi faucibus fringilla enim, in lobortis nibh fermentum hendrerit.

                    Vestibulum in vehicula tellus, non finibus nisl. Phasellus semper quam vitae sem dignissim dapibus. Aliquam magna justo, posuere id tempor eu, laoreet et ipsum. Nam at mauris ac arcu dapibus accumsan. Sed erat sapien, cursus nec justo non, imperdiet accumsan velit. Curabitur et nisi aliquet, commodo nisi at, laoreet nulla. Phasellus euismod lacus nibh, eget scelerisque orci mollis eu. Aenean id arcu volutpat, accumsan nibh tristique, pulvinar lacus. Etiam sagittis turpis eget luctus sagittis. Fusce bibendum ante eros, vel volutpat nisl tempor sit amet. Etiam imperdiet risus ligula. Nulla facilisi.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalProducto;