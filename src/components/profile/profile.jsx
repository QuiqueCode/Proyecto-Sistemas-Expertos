import React, { useState, useEffect } from "react";
import "./profilecss.css";
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
import axios from "axios";

const Profile = () => {
  const URL = "http://localhost:3000/api";
  const [datos, setDatos] = useState([]);
  const [sliderValue, setSliderValue] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado de carga
const [userData,setUserData]=useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    changePreference();
  };

  //leo los datos del ususario para saber su preferencia y definirsela al slider
  const fetchPreference = () => {
    const userId = localStorage.getItem("idUser");


      axios
        .get(`${URL}/getpreference?userId=${userId}`)
        .then((response) => {
          const category = response.data[0].preference;
          console.log("Categoría obtenida:", category);

            let initialValue = 0;
            if (category == 1) {
              initialValue = 33.33;
            } else if (category == 2) {
              initialValue = 66.66;
            } else if (category == 3) {
              initialValue = 100;
            }
            console.log(initialValue);
            setSliderValue(initialValue);
    
          setLoading(false); // Marcar como cargado después de obtener los datos
        })
        .catch((error) => {
          console.error("Error al obtener la preferencia:", error.message || error);
          setLoading(false); // Marcar como cargado en caso de error también
        });

  };

  const  getUser= async ()=>{
    const userId = localStorage.getItem("idUser");
    console.log("SOY EL USER ID DEL METODO PERFIL", userId)
    const user=  await axios.get(`http://localhost:3000/api/userData?_id=${userId}`);
    console.log("SOY USER ", user)
    setUserData(user)
    }

      useEffect(()=>{
        getUser();
      },[]);


  useEffect(() => {
    fetchPreference();
  }, []);

  const changePreference = () => {
    if (loading) {
      console.log("en espera");
    }else{
    const userId = localStorage.getItem("idUser");
    let category = 0;

    if (sliderValue === 0) {
      category = 0;
    }
    else if (sliderValue === 33.33) {
      category = 1;
    } else if (sliderValue === 66.66) {
      category = 2;
    } else if (sliderValue === 100) {
      category = 3;
    }

    if (userId) {
      axios
        .patch(
          `${URL}/updatepreference?user_id=${userId}&category_id=${category}`
        )
        .then((response) => {
          console.log("data ", response.data[0]);
          setDatos(response.data);
        })
        .catch((error) => {
          console.error("Error al buscar:", error.message || error);
        });
    } else {
      console.error("No se encontró el valor 'idUser' en localStorage");
    }}
  };

  useEffect(() => {
    changePreference();
  }, [sliderValue]);



  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container" style={{ padding: "60px" }}>
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
            <h2>Nombre: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.name}</span></h2>
            <h2>Primer Apellido:  <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.surname1}</span></h2>
            <h2>Segundo Apellido: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.surname2}</span></h2>
            <h2>Correo: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.emailAddress}</span></h2>
            <div className="edit">
              <DiscreteSliderValues
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <br />
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
    label: "Mountain",
  },
  {
    value: 100,
    label: "City",
  },
];

function valueLabelFormat(value) {
  const mappedValue = (value / 100) * (marks.length - 1);
  const roundedValue = Math.round(mappedValue);
  return `${roundedValue}`;
}

function DiscreteSliderValues({ value, onChange }) {
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Restricted values"
        value={value}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={onChange}
      />
    </Box>
  );
}

export default Profile;