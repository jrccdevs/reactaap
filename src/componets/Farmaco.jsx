import React, { Component } from 'react'
import Header from "./Header";
import Busqueda from "./Busqueda";

export default class Farmaco extends Component {
    render() {
        return (
            <>
                <Header />
                <Busqueda />
                <div class="container">
                    <h1>Fármaco vigilancia</h1>
                    <h3>Campos marcados con * son requeridos</h3>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Sexo</label>
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>Eligir...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Condición</label>
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>Eligir...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Teléfono</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Producto</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </>
        )
    }
}
