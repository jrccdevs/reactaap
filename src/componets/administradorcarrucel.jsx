//import  {useState, useEffect}  from 'react'
//import axios from 'axios'
import Menuadmin from './menuadmin'
export default function Administradorcarrucel() {
   
  /*  const [producto, setProducto] = useState('')

    const handleChange = e =>{
     setProducto({
        name : '',
        salary : 0,
         [e.target.name]: e.target.value
     })
    }
  let {name, salary }= producto;
 
 
    const handlesubmit = async() =>{
        salary = parseInt(salary, 10)
 if(name === '' || salary <= 0){
     alert('los campos son obligatorios');
     return
 
   }
   
     try {
        
 
         
         let res = await axios.post(`http://localhost:4000/api/employees`,
       
         );
 
         Swal.fire({
             position: 'top-end',
             icon: res.data ? 'error' : 'success',
             title: res.data ? res.data : res.data,
             showConfirmButton: false,
             timer: 3000
           });
     } catch (error) {
         console.log(error)
     }
   
 };    */
 
 
    
 
 
 
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
                                 <form 
                                 //onSubmit={handlesubmit}
                                 >
                                   
                                     <div className="input-group mb-3">
                                         <div className="custom-file">
                                         <input name="name" 
                                       //  onChange={handleChange} 
                                         className="form-control" type="text" id="name" placeholder="Nombre"/>
                                         </div>
 
                                     </div>
                                     <div className="input-group mb-3">
                                         <div className="custom-file">
                                         <input name="salary"
                                          //onChange={handleChange}  
                                          className="form-control" type="number" id="salary" placeholder="salario"/>
                                         </div>
 
                                     </div>
                                     <button className="btn btn-primary" type="submit" 
                                     //onClick={handlesubmit}
                                     >
                                        aceptar
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
 
         </>
     );
 }
 
 