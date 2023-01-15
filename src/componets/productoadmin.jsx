import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import Menuadmin from './menuadmin.jsx'

function ProductoAdmin() {

    const [files, setFiles] = useState([])

    useEffect(() => {
        const getupload = async () => {
            const tabla = 'tblcarrucel'
            let result = await axios.get(`http://localhost:5000/images/get/${tabla}`)
            setFiles(result.data)

        }
        getupload();
    }, [])


    const upload = async () => {
        try {
            const formdata = new FormData()
            formdata.append("image", files)

            const tabla = 'tblcarrucel'
            let res = await axios.post(`http://localhost:5000/images/post/${tabla}`,
                formdata
            );

            Swal.fire({
                position: 'top-end',
                icon: res.data.err ? 'error' : 'success',
                title: res.data.err ? res.data.err : res.data.msg,
                showConfirmButton: false,
                timer: 3000
            });
        } catch (error) {
            console.log(error)
        }

    };


    return (
        <>
            <div>
                <Menuadmin></Menuadmin>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form action="">

                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input id="fileinput" onChange={(e) => setFiles(e.target.files[0])} className="form-control" type="file" />
                                        </div>

                                    </div>
                                    <button onClick={upload} className="btn btn-primary">
                                        subir imagenes
                                    </button>


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
                                {files.map(file => (
                                    <tr key={file.id} >
                                        <th>{file.id}</th>
                                        <th>{file.type}</th>
                                        <th>{file.name}</th>
                                    </tr>
                                ))

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductoAdmin;