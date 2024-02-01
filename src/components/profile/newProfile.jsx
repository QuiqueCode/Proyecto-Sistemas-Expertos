import React, { useEffect, useState } from "react";
import "./newProfilecss.css";
import { Avatar, Slider, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Button from '@mui/material/Button';
import Swal from "sweetalert2";


export function NewProfile(){
    const URL = "https://recomendacionesse.onrender.com/api";
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
        
  
              let initialValue = 0;
              if (category == 1) {
                initialValue = 33.33;
              } else if (category == 2) {
                initialValue = 66.66;
              } else if (category == 3) {
                initialValue = 100;
              }
            
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
      const user=  await axios.get(`https://recomendacionesse.onrender.com/api/userData?_id=${userId}`);
      setUserData(user)
      fetchPreference();
      }
  
        useEffect(()=>{
          getUser();
        },[]);
  
  
   /* useEffect(() => {
      fetchPreference();
    }, []);*/
  
    const changePreference = () => {
      if (loading) {
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
  

    return(
        <>
        <div className="newProfileContainer">
            
            <div className="content">

                <div className="leftDiv">

                <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="../../../src/assets/images/logoc.png"
                sx={{ width: 200, height: 200 }}
              />
            </Stack>
            <h2 style={{marginTop:"20px"}}>{userData.data.name}</h2>
        <div style={{marginTop:'30px'}}>
             <h4 className="profileItems">Nombre: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.name}</span></h4>
            <h4 className="profileItems">Primer Apellido: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.surname1}</span> </h4>
            <h4 className="profileItems">Segundo Apellido: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.surname2}</span></h4>
            <h4 className="profileItems">Correo: <span style={{  display: 'inline', fontWeight: 'normal' }}>{userData.data.emailAddress}</span></h4>
        </div>
          

                </div>

                <div className="rigthDiv">
                <h2 style={{textDecoration:"underline"}} >Editar Perfil</h2>
                
                
                <div className="editProfileContainer">
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" sx={{width:395, marginBottom:3}}  value={userData.data.name} />
                    <TextField id="outlined-basic" label="Primer Apellido" variant="outlined" sx={{width:400}} value={userData.data.surname1}/>
                    <TextField id="outlined-basic" label="Segundo Apellido" variant="outlined" sx={{width:"100%",marginBottom:3}} value={userData.data.surname2}/>
                    <TextField id="outlined-basic" label="Correo" variant="outlined" value={userData.data.emailAddress} sx={{width:400}} />
                    <div style={{marginLeft:"30px", marginTop:"30px",width:"100%"}} >
                        <h3>Preferencia de tours</h3>
                    <DiscreteSliderValues
                value={sliderValue}
                onChange={handleSliderChange}
                
              />
                    </div>
                
                </div>
                <div className="footerProfile">
                <Stack spacing={2} direction="row" sx={{ marginTop: 5, marginLeft: 'auto', alignItems: 'flex-end' }}>

<Button variant="outlined" onClick={()=>{save()}}>Guardar Cambios</Button>
</Stack>
                </div>
               
             

                </div>



            </div>


        </div>
        
        
        </>
    );
}
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
  
  function save(){
    Swal.fire({
      title: "Datos almacenados!",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        // Recargar la página
        window.location.reload();
      }
    });
  }