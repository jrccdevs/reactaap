import React, {useState} from 'react';
import ProductosAside from './ProductosAside'

function ContentControl() {

    const [currentContent, setCurrentContent] = useState('dashboard');

    
    return (
        <div className="content-wrapper">
        <h1>contenido</h1>
        </div>
    );
}



export default ContentControl;

