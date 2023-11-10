import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { getProductosCarrucel } from "../api/productosCar";
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import Logochica from "../img/imgLogochica.png";
import LogoAlfa from "../img/LogoAlfa.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/prueba.css";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(17, 120, 189)", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(17, 120, 189)", borderRadius:"50%", paddingRight:"1%"}}
        onClick={onClick}
      />
    );
  }



export default function Productos2() {

    const location = useLocation();
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);

    const [busqueda, setBusqueda] = useState("");
  
  
    useEffect(() => {
      async function loadProductos() {
        const response = await getProductosCarrucel();
        setProductos(response.data);
      }
      loadProductos();
    }, []);
  
    const handleChange = (e) => {
      setBusqueda(e.target.value);
      buscar(e.target.value);
    };
  
    let result = [];
  
    const buscar = (e) => {
      if (!busqueda) {
        result = productos;
      } else {
        result = productos.filter((dato) =>
          dato.principioactivo
            .toLowerCase()
            .includes(busqueda.toLocaleLowerCase())
        );
      }
    };
  
    buscar();
  
    console.log(result);
  
    // if (result == 0) {
    //     console.log("RODRIGO ");
    // };
    /*  const filtrar = (terminobusqueda) => {
              var resbusqueda = productos.filter((elemento) => {
                  if (elemento.nombreproducto.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
                      || elemento.formafarmaceutica.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
                  ) 
                      return (elemento);
                  
              });
              setProductos(resbusqueda);
          }*/
  
    // let active = 1;
    // // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //     result.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }
    // const unreadMessages = "hola";
  
    // if (result.length > 0) {
    // }else {
    //     console.log("RODRIGO    ")
    // }

    
    const settings = {
       /*  dots: true, */
        lazyLoad: true,
        initialSlide: 2,
      
        infinite: true,
        color: 'black',
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    lazyLoad: true,
                  infinite: true,
                  autoplay: true,
                  pauseOnHover: true,
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
                  speed: 500,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  lazyLoad: true,
                  infinite: true,
                  autoplay: true,
                  pauseOnHover: true,
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
                  speed: 500,
                }
            },
           
        ]
    };


    return (

        <div className="principal col-12">



            <div className="slider-container col-12">
               

                <div className="sliderimagen col-12 ">
                    <Slider {...settings} >

                        {result.map((producto) => (

                            <div className="slider col-12 " key={producto.id}>

                                <div className='item'>
                                    {/* <Link to={`/productos/${producto.id}`}> */}
                                    <Link to={`/productos/${producto.id}/page/1`}>
                                        <img

                                            src={producto.image}
                                            alt=""
                                        />
                                    </Link>
                                </div>


                            </div>

                        ))}

                    </Slider>
                </div>
            </div>
        </div>

    );
}

/* {currentItems.map((producto) => (
    <div className="App">
        <Slider
            dots={false}
            slidesToShow={2}
            slidesToScroll={2}
            autoplay={true}

        >
            {producto.image}
        </Slider>
    </div>
))} */