import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "./recommendations.css";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Recommendations() {
  const URL = "https://recomendacionesse.onrender.com/api";
  const [datos, setDatos] = useState([]);

  const recommedations = () => {
    const userId = localStorage.getItem("idUser");

    if (userId) {
      axios
        .get(`${URL}/recommendations?id=${userId}`)
        .then((response) => {
          setDatos(response.data);
        })
        .catch((error) => {
          console.error("Error al buscar:", error);
        });
    } else {
      console.error("No se encontró el valor 'idUser' en localStorage");
    }
  };


  useEffect(() => {
    recommedations();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: (
      <button type="button" className="slick-prev">
        Previous
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ),
  };

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0)",
      }}
    >
      <div className="Tittle">
        <h2>De acuerdo a tus gustos</h2>
      </div>

      <Slider {...settings} className="carousel-container-preference">
        {datos.map((card, index) => (
          <div key={index} className="WhyInformationCard">
            <Card
              className="CardPopularDestinations"
              sx={{ maxWidth: 345, borderRadius: 4 }}
              style={{ margin: "10px" }}
            >
              <Link to={"/fullTour"}>
                <CardActionArea
                  onClick={() => {
                    const datosString = JSON.stringify(card);
                    localStorage.setItem("misDatos", datosString);
      
                  }}
                >
                  <div className="dark-overlay">
                    <CardMedia
                      component="img"
                      height="150"
                      image={card.img}
                      alt={card.name}
                    />
                  </div>
                  <CardContent className="CardContent">
                    <Typography component="div" className="PlaceName">
                      <h3>{card.name}</h3>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        ))}
      </Slider>
    </Card>
  );
}

export default Recommendations;
