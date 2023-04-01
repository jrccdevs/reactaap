import React, {  useState } from 'react'
//import emailjs from '@emailjs/browser';
import Header from "./Header";
import Busqueda from "./Busqueda";
import Footer from './Footer';
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//import { useNavigate } from "react-router-dom";



export default function Farmaco() {
   // const form = useRef();
    const [valueNombre, setValueNombre] = useState('');
    const [valueApellido, setValueApellido] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueSexo, setValueSexo] = useState('');
    const [valueCondicion, setValueCondicion] = useState('');
    const [valueTelefono, setValueTelefono] = useState('');

//prueba con axios
const clearInputs = () => {
    setValueNombre('');
    setValueApellido('');
    setValueEmail('');
    setComentario('');
    setProducto('');
    setValueSexo('');
    setValueTelefono("");
    setValueCondicion('');
}
const MySwal = withReactContent(Swal)
const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://formsubmit.co/ajax/farmacovigilancia@alfabolivia.com",
      data: {
        Nombre: valueNombre,
        Apellido: valueApellido,
        Email: valueEmail,
        Sexo: valueSexo,
        Condicion: valueCondicion,
        Telefono: valueTelefono,
        producto: producto,
        comentario: comentario,
      },
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nombre: valueNombre,
        comentario: "I'm from Devro LABS"
    })
    })
      .then((response) => {
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: '"Gracias por enviar su formulario, le responderemos a la brevedad."',
            showConfirmButton: true,
            // timer: 2000
           
        })
        clearInputs();
      })
      .catch((error) => {
        MySwal.fire({
            position: 'center',
            icon: 'error',
            title: '"hubo un error al enviar su formulario"',
            showConfirmButton: true,
            // timer: 2000

        })
        console.log(error);
      });
  };


    const handleChangeNombre = (event) => {
        setValueNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setValueApellido(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value);
    }; 



    /* const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dhr6rib', 'template_alh2l5c', form.current, '8qKNpO_udkT1f1ksK')
            .then((result) => {
                console.log("mensaje enviuado", result.status, result.text);
                handleClick()
            }, (error) => {
                console.log(error.text);
            });
    }
 */

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


   /*   const clearInputs = () => {
        setValueNombre('');
        setValueApellido('');
        setValueEmail('');
        setComentario('');
        setProducto('');
        setValueSexo('');
        setValueTelefono("");
        setValueCondicion('');
    }

    const MySwal = withReactContent(Swal) 

 function handleClick(e) {
       // e.preventDefault();
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: '"Gracias por enviar su formulario, le responderemos a la brevedad."',
            showConfirmButton: true,
            // timer: 2000

        })
        clearInputs();
    }  */
    


    return (
        <>
            <Header />
            <Busqueda />

            <div className="container">
                <h1>Farmacovigilancia</h1>
                <h5>Campos marcados con <span className="text-danger">*</span> son requeridos</h5>
                
                <form onSubmit={handleSubmit} style={{ fontSize: "12px" }}>
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
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="sexo" value={valueSexo} onChange={e => setValueSexo(e.target.value)}>
                            <option selected>Eligir...</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Condición</label>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="condicion" value={valueCondicion} onChange={e => setValueCondicion(e.target.value)}>
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
                        <input type="number" name="telefono" className="form-control" value={valueTelefono} onChange={e => setValueTelefono(e.target.value)} />
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
                        <button  className="btn btn-success" type="submit" value="enviar" >Enviar</button>
                    </div>

                   
                    <input type="hidden" name="_template" value="box"/>
                    <input type="hidden" name="_captcha" value="false"/>    
                    <input type="hidden" name="_next" value="http://localhost:3000/es/farmaco-vigilancia"/>
                </form>
            </div>
            <Footer />
        </>
    )


}
























