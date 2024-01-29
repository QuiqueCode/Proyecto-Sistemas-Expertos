import React, { useEffect, useRef } from 'react';
import './modal.scss';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Imglogo from '../../assets/images/MN.jpg';
import ImgM from '../../assets/images/MontanaNavBar.jpg';
import { Typography, Box, Grid, Card, Button } from "@mui/material";

export function Modal(props) {
    const numEstrellas = 5;
    const colorEstrella = '#FFCC00';
    const estrellas = [];



    for (let i = 0; i < numEstrellas; i++) {
        estrellas.push(<FaStar key={i} style={{ color: colorEstrella }} />);
    }

    const handleClick = () => {
        //localStorage.clear();
        const datosString = JSON.stringify(props);
        localStorage.setItem('misDatos', datosString);
    };

    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };

        window.addEventListener('click', clickOutsideContent);

        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [props]);

    return (
        <div ref={modalRef} className={`modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content">
                {!props.hideCloseButton && (
                    <span onClick={() => props.setShow(false)} className="modal__close">
                        &times;
                    </span>
                )}

                <div className="modal__header">


                    <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '2.5em', marginLeft: '1%', marginTop: '1%' }}>
                        {props.data.name}
                    </Typography>

                </div>

                <div className="modal__body">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5%' }}>
                        <div>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            m: "0 10px",
                                        }}
                                    >


                                        <Typography
                                            variant="h6"
                                            sx={{
                                                marginLeft: "10px",
                                                fontSize: '15px'
                                            }}
                                        >
                                            32 opiniones
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                           
                                            fontSize: '15px'
                                        }}
                                    >
                                        |
                                    </Typography>
                                    <Box
                                        variant="h6"
                                        
                                        sx={{
                                            marginLeft: "4px",
                                            fontSize: '15px'
                                        }}
                                    >
                                        <Typography variant="h6"
                                                sx={{
                                                    marginLeft: "4px",
                                                    fontSize: '15px'
                                                }}>Distrito de excelencia</Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            marginLeft: "8px",
                                            fontSize: '15px'
                                        }}
                                    >
                                        |
                                    </Typography>
                                    <Box
                                        variant="h6"
                                        sx={{
                                            marginLeft: "4px",
                                            fontSize: '15px'
                                        }}
                                    >
                                        <Typography variant="h6"
                                            
                                                sx={{
                                                    marginLeft: "4px",
                                                    fontSize: '15px'
                                                }}>{props.data.place}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <img
                                src={Imglogo}
                                alt=""
                                style={{ flex: 1, marginLeft: '20px', marginRight: '40px', maxWidth: '500px', borderRadius: '10px', maxHeight: '600px' }}
                            /></div>
                        <div style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", borderRadius: "10px" }}>

                            <Box
                                sx={{
                                    backgroundColor: "#e64747",
                                    p: "1px 6px",
                                    textAlign: "center",
                                    width: "25%",
                                    m: "15px",
                                    borderRadius: "6px",
                                    marginLeft: '70%',
                                    mb: "3px",

                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#ffff",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Se agota rápido
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    p: "5px 55px",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    Desde ₡ {props.data.price}
                                </Typography>


                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        m: "3px 0",
                                    }}
                                >
                                    Garantía del precio más bajo
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: "#EAFBF7",
                                    m: "10px 25px",
                                    textAlign: "left",
                                    mb: "30px"
                                }}
                            ><Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '1.2em', marginLeft: '5%', marginTop: '5%' }}>
                                    Descripción general
                                </Typography>

                                <Typography variant="body1" sx={{ p: '20px' }} style={{ flex: 1, textAlign: 'justify' }}>
                                    {props.data.description}
                                </Typography></Box>

                        </div>
                    </div>
                    <Link to={'./fullTour'}>
                        <button
                            style={{
                                border: '0',
                                outline: '0',
                                padding: '0.6rem 1.725rem', // Ajustado el padding para hacer el botón un 15% más grande
                                fontWeight: '600',
                                fontSize: '150%', // Ajustado el tamaño de la fuente para hacer el botón un 15% más grande
                                color: '#fff',
                                backgroundImage: `url(${ImgM})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                position: 'absolute',
                                right: '25px',
                                bottom: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                textShadow: '3px 3px 5px #000',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.opacity = '0.8';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.transform = 'scale(1)';
                            }}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Reservar!
                        </button>
                    </Link>

                </div>

                <div className="modal__footer"></div>
            </div>
        </div>
    );
}

export default Modal;
