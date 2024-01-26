import React, { useState, useEffect } from "react";
import "./profilecss.css";
import image from "../../assets/images/logoc.jpg";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Card,
} from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Card
      sx={{
        m: "100px 400px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container" style={{padding: "60px"}}>
        <div className="profileContainer">
          <div className="image">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1622757315689-a4e88eff699b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sx={{ width: 350, height: 350 }}
              />
            </Stack>
          </div>
          <div className="text">
            <h2>Nombre:</h2>
            <h2>Primer Apellido:</h2>
            <h2>Segundo Apellido:</h2>
            <h2>Correo:</h2>
            <div className="edit">
              <DiscreteSliderValues></DiscreteSliderValues> <br />
              <br />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#399380",
                  color: "#FFFFFF",
                  alignSelf: "start",
                  "&:hover": {
                    backgroundColor: "#2E7D6E",
                  },
                }}
                onClick={handleOpenModal}
              >
                Editar Perfil
              </Button>
            </div>
          </div>
        </div>

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                label="Nombre"
                fullWidth
                sx={{
                  mb: "20px",
                }}
              />
              <TextField
                label="Primer Apellido"
                fullWidth
                sx={{
                  mb: "20px",
                }}
              />
              <TextField
                label="Segundo Apellido"
                fullWidth
                sx={{
                  mb: "20px",
                }}
              />
              <TextField
                label="Correo"
                fullWidth
                sx={{
                  mb: "20px",
                }}
              />
              <Button type="submit" variant="contained" color="primary">
                Guardar Cambios
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

const marks = [
  {
    value: 0,
    label: "None",
  },
  {
    value: 33.33,
    label: "Beach",
  },
  {
    value: 66.66,
    label: "City",
  },
  {
    value: 100,
    label: "Mountain",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
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
