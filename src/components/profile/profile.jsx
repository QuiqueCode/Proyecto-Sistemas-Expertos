import React, { useState, useEffect } from "react";
import './profilecss.css'
import image from '../../assets/images/logoc.jpg'
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Profile = () => {

  return (
 <div className="container">
    <div className="profileContainer">
    <div className="image">
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:450,height:450}} />
    </Stack>
    </div>
          <div className="text">
          <h1>Nombre:</h1> 
          <h1>Primer Apellido:</h1>
          <h1>Segundo Apellido:</h1>
          <h1>Correo</h1> 
          
          <div className="edit">
            <DiscreteSliderValues></DiscreteSliderValues> <br /><br />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#399380",
              color: "#FFFFFF",
              alignSelf:'start',
              "&:hover": {
                backgroundColor: "#2E7D6E", // Puedes cambiar "transparent" por otro color o valor deseado
              },
            }}
          >
            Editar Perfil
          </Button>
        </div>
          </div>
    </div>
 </div>
  );
};


const marks = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 33.33,
    label: 'Beach',
  },
  {
    value: 66.66,
    label: 'City',
  },
  {
    value: 100,
    label: 'Mountain',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

 function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}







export default Profile;