import React from "react";
import "./recommendations.css";
import { Card } from "@mui/material";

function Population() {
    const cities = [
        "Cosas que hacer en San José",
        "Cosas que hacer en San José del Cabo",
        "Cosas que hacer en Puerto Limón",
        "Cosas que hacer en Puntarenas",
        "Cosas que hacer en Quepos",
        "Cosas que hacer en Liberia",
        "Cosas que hacer en Tamarindo",
        "Cosas que hacer en Jacó",
        "Cosas que hacer en La Fortuna",
        "Cosas que hacer en Monteverde"
      ];
      
      const atractions   = [
        "Parque Nacional Manuel Antonio",
        "Volcán Arenal",
        "Cahuita",
        "Río Celeste",
        "Manzanillo",
        "Playa Conchal",
        "Tortuguero",
        "Monteverde Cloud Forest Reserve",
        "Corcovado National Park",
        "Tamarindo Beach"
      ];
      
  
  
  const cityLinks = cities.map((city, index) => (
    <React.Fragment key={index}>
      {index > 0 && " | "}
      <a href={`#${city}`}>{city}</a>
    </React.Fragment>
  ));

  const atractionLinks = atractions.map((atraction, index) => (
    <React.Fragment key={index}>
      {index > 0 && " | "}
      <a href={`#${atraction}`}>{atraction}</a>
    </React.Fragment>
  ));
  return (
    <Card>
      <div className="popular-areas">
        <h2>Ciudades Populares</h2>
        <p>{cityLinks}</p>
      </div>
      <div className="popular-areas-two">
        <h2>Atracciones Populares</h2>
        <p>{atractionLinks}</p>
      </div>
    </Card>
  );
}

export default Population;
