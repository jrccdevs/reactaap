import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import mapa from "../img/mapa-sucursales.png";

export default function Maps() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);


  const openModal = (event, data) => {
    event.preventDefault();
    setModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="container">
      <div className="row">
        <section className="col-12">
          <div className="col-lg-12 text-center">
            <h4 className="text-center my-4">SUCURSALES BOLIVIA</h4>

            <img className="img-fluid" src={mapa} width="652" height="682" alt="sucursales-bolivia" useMap="#Map" />
            <map name="Map">
              <area
                shape="circle"
                coords="417,319,17"
                href="#"
                alt="santa_cruz"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Santa Cruz",
                  body: "Información de la sucursal de Santa Cruz",
                })}
              />
              <area
                shape="circle"
                coords="236,182,17"
                href="#"
                alt="beni"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Beni",
                  body: "Información de la sucursal de Beni",
                })}
              />

              <area
                shape="circle"
                coords="134,49,17"
                href="#"
                alt="pando"
                onClick={(event) => openModal(event, {
                  title: "Sucursal pando",
                  body: "Información de la sucursal de pando",
                })}
              />

              <area
                shape="circle"
                coords="91,240,17"
                href="#"
                alt="la_paz"
                onClick={(event) => openModal(event, {
                  title: "Sucursal La Paz",
                  body: "Información de la sucursal de La Paz",
                })}
              />

              <area
                shape="circle"
                coords="215,327,17"
                href="#"
                alt="cochabamba"
                onClick={(event) => openModal(event, {
                  title: "Sucursal cochabamba",
                  body: "Información de la sucursal de cochabamba",
                })}
              />

              <area
                shape="circle"
                coords="136,391,17"
                href="#"
                alt="oruro"
                onClick={(event) => openModal(event, {
                  title: "Sucursal oruro",
                  body: "Información de la sucursal de oruro",
                })}
              />

              <area
                shape="circle"
                coords="193,464,17"
                href="#"
                alt="potosi"
                onClick={(event) => openModal(event, {
                  title: "Sucursal potosi",
                  body: "Información de la sucursal de potosi",
                })}
              />

              <area
                shape="circle"
                coords="292,429,17"
                href="#"
                alt="chuquisaca"
                onClick={(event) => openModal(event, {
                  title: "Sucursal chuquisaca",
                  body: "Información de la sucursal de chuquisaca",
                })}
              />

              <area
                shape="circle"
                coords="267,531,17"
                href="#"
                alt="tarija"
                onClick={(event) => openModal(event, {
                  title: "Sucursal tarija",
                  body: "Información de la sucursal de tarija",
                })}
              />
            </map>
          </div>
        </section>
      </div>

      {modalData && (
        <Modal show={modalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalData.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )
      }

    </div >
  );
}

// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { ImageMap } from '@qiuz/react-image-map';
// import mapa from "../img/mapa-sucursales.png";

// export default function Maps() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   const openModal = (event, data) => {
//     event.preventDefault();
//     setModalOpen(true);
//     setModalData(data);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setModalData(null);
//   };

//   const shapes = [
//     {
//       shape: "circle",
//       coords: [417, 319, 17],
//       alt: "santa_cruz",
//       onClick: (event) =>
//         openModal(event, {
//           title: "Sucursal Santa Cruz",
//           body: "Información de la sucursal de Santa Cruz",
//         }),
//     },
//     {
//       shape: "circle",
//       coords: [236, 182, 17],
//       alt: "beni",
//       onClick: (event) =>
//         openModal(event, {
//           title: "Sucursal Beni",
//           body: "Información de la sucursal de Beni",
//         }),
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="row">
//         <section className="col-12">
//           <ImageMap className="img-fluid" src={mapa} width={652} height={682} shapes={shapes} />
//           <img className="img-fluid" src={mapa} width="652" height="682" alt="sucursales-bolivia" useMap="#Map" />

//         </section>
//       </div>

//       {modalData && (
//         <Modal show={modalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
//           <Modal.Header closeButton>
//             <Modal.Title>{modalData.title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>{modalData.body}</Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" onClick={closeModal}>
//               Cerrar
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </div>
//   );
// }
