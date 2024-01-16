import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton, Card } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { ImgMediaCard } from "../Categories/categories";
import "./tarjets.css";

function Body(props) {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const cardsPerPage = 3;
  const duplicateCards = Array.from({ length: 8 }, (_, i) => (
    <ImgMediaCard key={i} />
  ));

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(duplicateCards);
  }, []);

  return (
    <>
      <Card className="principalCard">
        <div className="recommendationsTitle">
          <h3>Podrías probar con esto...</h3>
        </div>
        <Box className="carouselContainer">
          <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
            <NavigateBeforeIcon />
          </IconButton>
          <Box className="card">
            {cards.map((card, index) => (
              <Box
                className={`carouselItem ${
                  currentPage === index ? "active" : ""
                }`}
                key={`card-${index}`}
              >
                <Slide direction={slideDirection} in={currentPage === index}>
                  <Stack
                    className="stack"
                    spacing={2}
                    direction="row"
                    alignContent="center"
                    justifyContent="center"
                  >
                    {cards.slice(
                      index * cardsPerPage,
                      index * cardsPerPage + cardsPerPage
                    )}
                  </Stack>
                </Slide>
              </Box>
            ))}
          </Box>
          <IconButton
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
            }
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}

export default Body;
