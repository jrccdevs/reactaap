import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Principal from './componets/Principal'
import Empresa from './componets/Empresa'
//import Productos from './componets/Productos'
import Vademecun from './componets/Vademecun'
import Menuadmin from './componets/menuadmin'
import Login from './componets/login/login'
import Productoadmin from './componets/productoadmin'
import Administradorcarrucel from './componets/administradorcarrucel'
import Administrarproducto from './componets/administrarproducto'
import Farmaco from './componets/Farmaco'
import {PostProvider} from './context/postContext'
import DetalleProducto from './componets/DetalleProducto';
import Productos2 from './componets/Productos2';
import PanelControl from './componets/PanelControl';
import Dasboard from './componets/login/Dasboard';
import ContentControl from './componets/login/ContentControl';
import ProductosAside from './componets/login/ProductosAside';
import Prospecto from './componets/Prospecto'
import Vigilancia from './componets/vigilancia'
import PaginaCarrucel from './componets/PaginaCarrucel'
import CarrucelRespon from './componets/CarrucelResponsiv'
import CarrucelAside from './componets/login/CarrucelAside'
import User from './componets/User'
import Principalbusqueda from './componets/Principalbusqueda'


//import React, { useState, useEffect } from 'react'
//import { Redirect } from 'react-router-dom'

export default function App() {

 /*  const RouteController = props => {
    const { component: Component, isAuthenticated, ...rest } = props

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        if (!localStorage.getItem("auth")) {
            setIsAuth(false)
        } else {
            const auth = JSON.parse(localStorage.getItem('auth'))
            if (auth === 'yes') {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        }
    }
    useEffect(init, [])

    return isAuth ? <Component {...rest} /> : <Redirect to='/login' />
} */

  return (
    <PostProvider>
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/empresa" element={<Empresa />} />
          {/* <Route path="/productos" element={<Productos />} /> */}
          <Route path="/productos" element={<Productos2 />} />
          <Route path="/productos/:id/page/:page" element={<DetalleProducto />} />
          
          <Route path="/prospecto" element={<Prospecto />} />
          <Route path="/vigilancia" element={<Vigilancia />} />
          <Route path="/menuadmin" element={<Menuadmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vademecun" element={<Vademecun />} />
          <Route path="/es/farmaco-vigilancia" element={<Farmaco />} />

          <Route path="/productoadmin" element={<Productoadmin />} />
          <Route path="/administradorcarrucel" element={<Administradorcarrucel />} />
          <Route path="/administrarproducto" element={<Administrarproducto />} />
          <Route path="/carrucelrespon" element={<CarrucelRespon />} />
          <Route path="/paginacarrucel/:id/page/:page" element={<PaginaCarrucel />} />

          <Route path="/user" element={<User />} />
          <Route path="/principalbusqueda" element={<Principalbusqueda />} />


          {/* PanelControl */}
          <Route path="/panelControl" element={<PanelControl />} />
          <Route path="/panelControl/producto" element={<PanelControl />} />
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/productosaside" element={<ProductosAside />} />
          <Route path="/panelControl/imagenes" element={<PanelControl />} />
          <Route path="/contentControl/imagenes" element={<ContentControl />} />
          <Route path="/panelControl/asidecarrucel" element={<PanelControl />} />
          <Route path="/asidecarrucel" element={<CarrucelAside />} />

        </Routes>
      </BrowserRouter>
    </PostProvider>
    


  );
}


