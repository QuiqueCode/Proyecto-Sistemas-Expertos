import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import catedral from "../../assets/images/prueba.jpg";
import "./categories.css";
import { Margin } from "@mui/icons-material";
import axios from "axios";
import Modal from "../Description/Modal";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export function CategoriesFeed(props) {
  const categoria = props.data[0]?.id_categoria_tour || 0; // Usar un valor predeterminado si props.data no tiene elementos

  const style =
    categoria === 1 ? "#C8DFEE" : categoria === 2 ? "#CCF0D5" : "#D9DBDB";

  return (
    <>
      <div className="feedCategorie">
        {props.data.map((datos, index) => (
          <ImgMediaCard
            key={index}
            style={style}
            categorie={datos.nombre_categoria}
            description={datos.descripcion_tour}
            name={datos.nombre_tour}
            price={datos.price}
            place={datos.nombre_place}
            image={datos.imagen_tour}
            idcategorie={datos.id_categoria_tour
            }
          />
        ))}
      </div>
    </>
  );
}
export function ImgMediaCard(prop) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        component="img"
        alt="green iguana"
        height="140"
        image={prop.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ height: 60 }}
        >
          {prop.name}
        </Typography>
        <div className="categorieCard" style={{ backgroundColor: prop.style, textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h8"
            component="div"
            sx={{ padding: 0.5 }}
          >
            {prop.categorie}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {prop.description.slice(0, 100)}
          {prop.description.length > 100 ? "..." : ""}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <div style={{ marginTop: "10px" }}>
            <TextRating data={prop}></TextRating>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: prop.style,
            width: 490,
            marginLeft: 0.3,
            color: "black",
            mb: "10px",
            "&:hover": {
              backgroundColor: prop.style, // Desactiva el cambio de color durante el hover
            },
          }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          Ver más
        </Button>

        <Modal show={showModal} setShow={setShowModal} data={prop}></Modal>
      </CardActions>
    </Card>
  );
}

const labels = {
  1: "Deficiente",
  1.5: "Malo",
  2: "Regular",
  2.5: "Aceptable",
  3: "Bueno",
  3.5: "Bueno +",
  4: "Excelente",
  4.5: "Excepcional",
  5: "Excepcional+",
};
export default function TextRating(props) {
  const categoria = props.data.categorie;
  // const style = props.data. === 1 ? '#adadad' : categoria === 2 ? "#9ce2b1" : "#5086dc";
  const value = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const random = categoria === "Playa" ? 5 : categoria === "Ciudad" ? 4 : 3;

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={value[random]}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value[random]]}</Box>
    </Box>
  );
}
