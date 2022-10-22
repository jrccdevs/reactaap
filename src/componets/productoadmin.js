import React, { Fragment } from 'react'


function ProductoAdmin() {

    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Inicio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#!">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Carrucel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Noticias</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="Producto"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="Producto" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="Categoria" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="Principio Activo" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="Forma Farmaceutica" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="title" className="form-control" placeholder="precio" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" name="image" className="custom-file-input" id="inputGroupFile01" />
                                            <label for="inputGroupFile01" className="custom-file-label" >seleccionar imagen</label>
                                        </div>

                                    </div>
                                    <buttom className="btn btn-primary">
                                        subir imagen
                                    </buttom>


                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>producto</th>
                                    <th>categoria</th>
                                    <th>acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>producto</th>
                                    <th>categoria</th>
                                    <th>acciones</th>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>

        </Fragment>
    );
}
export default ProductoAdmin;