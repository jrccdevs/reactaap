import React, { Component } from 'react'

export default class Vademecun extends Component {
    render() {
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
               <object
               data={require('../docs/VademecumJULIO2023.pdf')}
               type="application/pdf"
               width= "100%"
               height="100%"
               >
               </object>
            </div>
        )
    }
}
