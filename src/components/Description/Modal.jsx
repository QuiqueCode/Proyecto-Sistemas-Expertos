import React, { useEffect, useRef } from 'react';
import './modal.scss';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Imglogo from '../../assets/images/logoc.jpg';
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
                    <Typography variant="h3" sx={{ p: '2px 0' }}>
                        {props.data.name}
                    </Typography>
                </div>

                <div className="modal__body">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5%' }}>
                        <img
                            src={Imglogo}
                            alt=""
                            style={{ flex: 1, marginLeft: '20px', marginRight: '40px', maxWidth: '200px', maxHeight: '400px' }}
                        />
                        <div>
                            <Box
                                sx={{
                                    backgroundColor: "#C52A00",
                                    p: "1px 6px",
                                    textAlign: "center",
                                    width: "20%",
                                    m: "15px",
                                    borderRadius: "6px",
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
                                    Desde ₡35,000.00
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
                            ><Typography variant="body1" sx={{ p: '20px 60px' }} style={{ flex: 1, textAlign: 'justify' }}>
                                    {props.data.description}
                                </Typography></Box>

                        </div>
                    </div>
                    <Link to={'./fullTour'}>
                        <button
                            style={{
                                border: '0',
                                outline: '0',
                                padding: '0.5rem 1.5rem',
                                fontWeight: '600',
                                fontSize: '110%',
                                color: '#fff',
                                backgroundImage: `url(${ImgM})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                position: 'absolute',
                                end: '1px',
                                right: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                textShadow: '3px 3px 5px #000',
                                transition: 'background-color 0.3s ease, transform 0.3s ease', // Agregamos transform a la transición
                            }}
                            onMouseOver={(e) => {
                                e.target.style.opacity = '0.8';
                                e.target.style.transform = 'scale(1.1)'; // Ajustado el valor de la escala
                            }}
                            onMouseOut={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.transform = 'scale(1)'; // Restaurar la escala original
                            }}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Reserva
                        </button>
                    </Link>
                </div>

                <div className="modal__footer"></div>
            </div>
        </div>
    );
}

export default Modal;