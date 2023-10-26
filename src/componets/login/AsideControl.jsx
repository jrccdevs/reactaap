import React, {useState} from 'react'
import { Link } from 'react-router-dom';





function AsideControl() {


  const [currentContent, setCurrentContent] = useState('dashboard');
    return (
       <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    
   
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
      
         
       
        <li className="nav-header">EXAMPLES</li>
      
        <li className="nav-item">
                    <Link
                      to="/panelControl/producto"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('contentControl/producto')}
                    >
                      <i></i> <span className="ms-1 d-none d-sm-inline">Productos</span>
                    </Link>
        </li>
        <li className="nav-item">
                   <Link
                      to="/panelControl/imagenes"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('contentControl/imagenes')}
                    >
                      cd fronte<span className="ms-1 d-none d-sm-inline">Imagenes</span>
                    </Link>
        </li>
      
        
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    )
}

export default AsideControl
