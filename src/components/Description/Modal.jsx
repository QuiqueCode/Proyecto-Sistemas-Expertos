import React, { useEffect, useRef } from "react";
import "./modal.scss";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Imglogo from "../../assets/images/MN.jpg";
import ImgM from "../../assets/images/MontanaNavBar.jpg";
import { Typography, Box, Grid, Card, Button } from "@mui/material";

export function Modal(props) {
  const numEstrellas = 5;
  const colorEstrella = "#FFCC00";
  const estrellas = [];

  for (let i = 0; i < numEstrellas; i++) {
    estrellas.push(<FaStar key={i} style={{ color: colorEstrella }} />);
  }

  const handleClick = () => {
    //localStorage.clear();
    const datosString = JSON.stringify(props.data);
    console.log("Soy el prop que debo cambiar", props);
    localStorage.setItem("misDatos", datosString);
  };

  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setShow(false);
      }
    };

    window.addEventListener("click", clickOutsideContent);

    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [props]);

  return (
    <div ref={modalRef} className={`modal ${props.show ? "active" : ""}`}>
      <div className="modal__content">
        {!props.hideCloseButton && (
          <span onClick={() => props.setShow(false)} className="modal__close">
            &times;
          </span>
        )}

        <div className="modal__header">
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              fontSize: "2.5em",
              marginLeft: "1%",
              marginTop: "1%",
            }}
          >
            {props.data.name}
          </Typography>
        </div>

        <div className="modal__body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <div>
              <img
                src={props.data.image}
                alt=""
                style={{
                  flex: 1,
                  marginLeft: "20px",
                  marginRight: "40px",
                  maxWidth: "500px",
                  borderRadius: "10px",
                  maxHeight: "500px",
                }}
              />
            </div>

            <div
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.0)",
                borderRadius: "10px",
                width: "100%",
                height: "325px",
              }}
            >
              <Box
                sx={{
                  m: "10px 25px",
                  textAlign: "left",
                  mb: "30px",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                  Descripción general
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ p: "20px" }}
                  style={{ flex: 1, textAlign: "justify" }}
                >
                  {props.data.description}
                </Typography>
              </Box>
            </div>
          </div>
          <Link to={"./fullTour"}>
            <button
              style={{
                border: "0",
                outline: "0",
                padding: "0.6rem 1.725rem", // Ajustado el padding para hacer el botón un 15% más grande
                fontWeight: "600",
                fontSize: "150%", // Ajustado el tamaño de la fuente para hacer el botón un 15% más grande
                color: "#fff",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
                cursor: "pointer",
                position: "absolute",
                right: "25px",
                bottom: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  props.data.idcategorie === 1
                    ? "#C8DFEE"
                    : props.data.idcategorie === 2
                    ? "#CCF0D5"
                    : props.data.idcategorie === 3
                    ? "#D9DBDB"
                    : "defaultColor",
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
