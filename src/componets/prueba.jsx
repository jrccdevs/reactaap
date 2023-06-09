import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

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



    const [formafarmaceutica, setformafarmaceuticaid] = useState('');
    const [producto, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    //Parametro de selectValue
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedValue = searchParams.get('selectedValue');
    // console.log(selectedValue);

    //Busqueda por el boton 
    const searchText = searchParams.get('searchProcut');
    // console.log(searchText);


    // Paginacion
    const [currentPage] = useState(7);
    const [itemsPerPage] = useState(12);




    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            
           
           
            let endpoint = `https://node-alfa.vercel.app/formaFarmaceutica/${formafarmaceutica}`;
            if (selectedValue) {
               
               
                 endpoint = `https://node-alfa.vercel.app/formaFarmaceutica/${selectedValue}`;
            }
            const response = await fetch(endpoint);
            const data = await response.json();
            setProductos(data);
        };
        fetchData();
    }, [selectedValue, formafarmaceutica, searchText]);




    let result = [];


    // const buscar = (e) => {
    //     if (!busqueda) {
    //         result = producto;
    //     } else {
    //         result = producto.filter((dato) =>
    //             dato.nombreproducto
    //                 .toLowerCase()
    //                 .includes(busqueda.toLocaleLowerCase())
    //         );
    //     }
    // };

    const buscar = () => {
        if (!busqueda && busqueda.length > 0) {
            result = producto;
        } else {
            result = producto.filter((dato) =>
                dato.nombreproducto
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            );
        }

        if (searchText) {
            result = result.filter((dato) =>
                dato.nombreproducto.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    };


    // let searchTextTemp = searchText;

    // const buscar = () => {
    //     if (!busqueda && busqueda.length >= 0) {
    //         navigate(`/productos`);
    //         result = producto;
    //         searchTextTemp = null;
    //     } else {
    //         result = producto.filter((dato) =>
    //             dato.nombreproducto
    //                 .toLowerCase()
    //                 .includes(busqueda.toLowerCase())
    //         );
    //     }

    //     if (searchTextTemp) {
    //         result = result.filter((dato) =>
    //             dato.nombreproducto.toLowerCase().includes(searchTextTemp.toLowerCase())
    //         );
    //     }
    // };

    buscar();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

    const settings = {
        dots: true,
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <div className="principal col-12">



            <div className="slider-container col-12">
                <div className="chica col-3">
                <img className="logoAlfaprueba" onClick={() => navigate("/")} src={LogoAlfa} alt="logoAlfa" />
                <img className="logoChica" onClick={() => navigate("/")} src={Logochica} alt="logoChicaAlfa" />
   
                </div>

                <div className="sliderimagen col-9">
                    <Slider {...settings} key={producto.id}>

                        {currentItems.map((producto) => (

                            <div className="slider col-12" key={producto.id}>

                                <div className='item'>
                                    <Link to={`/productos/${producto.id}`}>
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