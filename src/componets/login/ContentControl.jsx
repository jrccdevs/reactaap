import React, {useState} from 'react';
import ProductosAside from './ProductosAside'

function ContentControl() {

    const [currentContent, setCurrentContent] = useState('dashboard');

    
    return (
        <div className="content-wrapper">
         {currentContent === 'contentControl/imagenes' && (
                  <div>
                 
                <ProductosAside></ProductosAside>
                </div>
                  )}
        </div>
    );
}



export default ContentControl;

