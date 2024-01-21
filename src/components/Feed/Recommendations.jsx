import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "./recommendations.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendations() {
  const cardData = [
    {
      title: "Manuel Antonio",
      image:
        "https://images.unsplash.com/photo-1611602316663-92dc58e199ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Volcán Arenal",
      image:
        "https://images.unsplash.com/photo-1664532869454-53ac5942d959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Vm9sY2FuJTIwYXJlbmFsfGVufDB8fDB8fHww",
    },
    {
      title: "Las Ruinas",
      image:
        "https://images.unsplash.com/photo-1696887027052-2e2d8debd399?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cahuita",
      image:
        "https://images.unsplash.com/photo-1580088233809-3882c7e26ba6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Río Celeste",
      image:
        "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Manzanillo",
      image:
        "https://images.unsplash.com/photo-1553391098-1080b545818e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "San José",
      image:
        "https://images.unsplash.com/photo-1699385600740-eabe6e85757d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Playa Conchal",
      image:
        "https://images.unsplash.com/photo-1542838344-fe8faf9da9c4?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
    <Card>
      <div className="Tittle">
        <h2>De acuerdo a tus preferencias</h2>
      </div>

      <Slider {...settings} className="carousel-container-preference">
        {cardData.map((card, index) => (
          <div key={index} className="WhyInformationCard">
            <Card
              className="CardPopularDestinations"
              sx={{ maxWidth: 345, borderRadius: 4 }}
              style={{ margin: "10px" }}
            >
              <CardActionArea>
                <div className="dark-overlay">
                  <CardMedia
                    component="img"
                    height="150"
                    image={card.image}
                    alt={card.title}
                  />
                </div>
                <CardContent className="CardContent">
                  <Typography component="div" className="PlaceName">
                    <h3>{card.title}</h3>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>

      <div className="TittleFlexible">
        <h2>Cancelación gratuita</h2>
        <div className="Text">
          <p>
            Se le reembolsará el importe íntegro si cancela con al menos 24
            horas de antelación al inicio de la mayoría de experiencias.
          </p>
        </div>
      </div>

    </Card>
  );
}

export default Recommendations;
