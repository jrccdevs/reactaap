import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Header from "./Header";
import Busqueda from "./Busqueda";
import Footer from './Footer';

export default function Farmaco() {

    const form = useRef();
    const [valueNombre, setValueNombre] = useState('');
    const [valueApellido, setValueApellido] = useState('');
    const [valueEmail, setValueEmail] = useState('');

    const handleChangeNombre = (event) => {
        setValueNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setValueApellido(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nfl4oyx', 'template_su3cz1p', form.current, 'mSAsr7S7ayqL61pcD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    const [comentario, setComentario] = useState('');

    const handleChangeComentario = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= 100) {
            setComentario(newValue);
        }
    };
    const contadorDesendente = 100 - comentario.length;


    const [producto, setProducto] = useState('');
    const [palabra, setPalabra] = useState(3);

    const handleChangeProducto = (event) => {
        const newValue = event.target.value;
        const words = newValue.split(' ');
        if (words.length <= 3) {
            setProducto(newValue);
            setPalabra(3 - words.length);
        }
    };

    return (
        <>
            <Header />
            <Busqueda />
            <div className="container">
                <h1>Fármaco vigilancia</h1>
                <h5>Campos marcados con <span className="text-danger">*</span> son requeridos</h5>
                <form ref={form} onSubmit={(e) => { sendEmail(e) }}>
                    <div className="mb-3 mt-4">
                        <label className="form-label fw-bold">Nombre<span className="text-danger"> *</span></label>
                        <input value={valueNombre} onChange={handleChangeNombre} type="text" name="nombre" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Apellido<span className="text-danger"> *</span></label>
                        <input value={valueApellido} onChange={handleChangeApellido} type="text" name="apellido" className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Sexo</label>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="sexo">
                            <option selected>Eligir...</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Condición</label>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="condicion">
                            <option selected>Eligir...</option>
                            <option value="Paciente">Paciente</option>
                            <option value="Profesional en Salud">Profesional en Salud</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email <span className="text-danger"> *</span></label>
                        <input value={valueEmail} onChange={handleChangeEmail} type="email" name="email" className="form-control" />
                        {/* {error && <p className="text-danger">{error}</p>} */}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Teléfono</label>
                        <input type="number" name="telefono" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Producto</label>
                        <input value={producto} onChange={handleChangeProducto} type="text" name="producto" className="form-control" />
                        <p>{palabra} de 3 palabra(s) restante(s)</p>

                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Comentario<span className="text-danger"> *</span></label>
                        <textarea value={comentario} onChange={handleChangeComentario} maxLength={100} className="form-control" name="comentario" rows="10" required></textarea>
                        <p>{contadorDesendente} de 100 carácter(es) restante(s)</p>

                    </div>

                    <div className="mb-3 text-center">
                        <button className="btn btn-success" type="submit" disabled={!valueNombre || !valueApellido || !valueEmail}>Enviar</button>
                    </div>



                </form>
            </div>
            <div>   
        </div>
            <Footer />
        </>
    )


}
