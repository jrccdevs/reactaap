/* import React from 'react'
import { useEffect, useState } from 'react'
import { getProductosRequest } from '../api/productos.api'
import { AiOutlineFunnelPlot } from 'react-icons/ai'
import { GiMedicalThermometer } from 'react-icons/gi'
import { FaTable } from 'react-icons/fa'

function viewproductos() {
    const [productos, setProductos] = useState([])

    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        async function loadProductos() {
            const respopnse = await getProductosRequest()
            setProductos(respopnse.data)

        }
        loadProductos();
    }, [])

     const handleChange = e => {
        setBusqueda(e.target.value);
        result(e.target.value)
    }
handleChange();
    let result = []
    if (!busqueda) {
        <div>
            <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  efedrina</text></h6>
            <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  antitusivo</text></h6>
            <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}> pomada</text></h6>
            <h5 style={{ color: 'green' }}>VER MAS (Prospecto)</h5>
        </div>
    } else {
        result = productos.filter((dato) =>
            dato.principioactivo.toLowerCase().includes(busqueda.toLocaleLowerCase())
        )
        return (
            <div key={result.id} >
                <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  {result.principioactivo}</text></h6>
                <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  {result.accionterapeutica}</text></h6>
                <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}> {result.formafarmaceutica} </text></h6>
                <h5 style={{ color: 'green' }}>VER MAS (Prospecto)</h5>
            </div>
        )
    }
    consogle.lo(result)


}
export default viewproductos;



 */