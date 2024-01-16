import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, ThemeProvider, createTheme } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '@fontsource/lobster';
import './carousel.css'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Puerto Viejo, Limón',
  },
  {
    url: 'https://images.unsplash.com/photo-1692349996897-d2e8906a2d3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cerro Chirripó, Talamanca',
  },
  {
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Avenida Central, San José',
  },
];

const theme = createTheme({
  typography: {
    fontFamily: 'Lobster', 
  },
});

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <ThemeProvider theme={theme}>
<Card className="carousel-card">
  <div className="carousel-container">
    {images.map((image, index) => (
      <img
        key={index}
        src={image.url}
        alt={image.title}
        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
      />
    ))}
    <div className="overlay" />
    <Typography variant="h3" className="carousel-title">
      {images[currentIndex].title}
    </Typography>
  </div>
  <CardContent className="carousel-buttons">
    <Button
      variant="contained"
      onClick={handlePrev}
      className="carousel-button"
      style={{ alignSelf: 'flex-start'}}
    >
      <NavigateBeforeIcon />
    </Button>
    <Button
      variant="contained"
      onClick={handleNext}
      className="carousel-button"
      style={{ alignSelf: 'flex-end' }}
    >
      <NavigateNextIcon />
    </Button>
  </CardContent>
</Card>
    </ThemeProvider>
  );
};

export default Carousel;