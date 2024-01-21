import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./popularDestinations.css";
import { Grid } from "@mui/material";

function PopularDestinations() {
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

  return (
    <Card>
      <div className="Tittle">
        <h2>Destinos más populares</h2>
      </div>

      <Grid container spacing={2} className="Columns">
        {cardData.map((card, index) => (
          <Grid
            key={index}
            className="WhyInformationCard"
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Card className="CardPopularDestinations" sx={{ maxWidth: 345, borderRadius: 4 }} >
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
          </Grid>
        ))}
      </Grid>

      <div className="TittleFlexible">
        <h2>Sea flexible</h2>
        <div className="Text">
        <p>Utilice Reservar ahora y pagar después para reservar sin compromiso su plaza en actividades que no quiera perderse.</p>
        </div>
      </div>
      

    </Card>
  );
}

export default PopularDestinations;
