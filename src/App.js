import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import Principal from './componets/Principal'
import Empresa from './componets/Empresa'
import Productos from './componets/Productos'
import Vademecun from './componets/Vademecun'


 export default function App() {
 
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Principal />} />
      <Route path ="/empresa" element={<Empresa />} />
      <Route path ="/productos" element={<Productos />} />
      <Route path ="/vademecun" element={<Vademecun />} />
    </Routes>
    </BrowserRouter>
 
  );
}


