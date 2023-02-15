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
          <Route path="/productos/:id" element={<DetalleProducto />} />


          <Route path="/menuadmin" element={<Menuadmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vademecun" element={<Vademecun />} />
          <Route path="/es/farmaco-vigilancia" element={<Farmaco />} />

          <Route path="/productoadmin" element={<Productoadmin />} />
          <Route path="/administradorcarrucel" element={<Administradorcarrucel />} />
          <Route path="/administrarproducto" element={<Administrarproducto />} />


        </Routes>
      </BrowserRouter>
    </PostProvider>
    


  );
}


