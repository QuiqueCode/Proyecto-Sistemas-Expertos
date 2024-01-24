import { Typography, Box, Grid, Card } from "@mui/material";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FullTour = () => {
  const numEstrellas = 5;
  const colorEstrella = "#FFCC00";
  const estrellas = [];

  const dataObject = JSON.parse(localStorage.getItem("misDatos"));

  for (let i = 0; i < numEstrellas; i++) {
    estrellas.push(<FaStar key={i} style={{ color: colorEstrella }} />);
  }

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          p: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#000000",
            display: "inline-block",
            p: "5px 15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#ffff",
            }}
          >
            Reservar ahora y pagar después
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            p: "10px 0",
          }}
        >
          Parque Nacional Volcán Irazú
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                m: "0 10px",
              }}
            >
              {estrellas}

              <Typography
                variant="h6"
                sx={{
                  marginLeft: "8px",
                }}
              >
                32 opiniones
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                margin: "0 10px",
              }}
            >
              |
            </Typography>
            <Box
              sx={{
                m: "0 10px",
              }}
            >
              <Typography variant="h6">Distrito de excelencia</Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                margin: "0 10px",
              }}
            >
              |
            </Typography>
            <Box
              sx={{
                m: "0 10px",
              }}
            >
              <Typography variant="h6">Irazú, Cartago</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Grid container>
          <Grid item lg="8" xl="8">
            <Box
              sx={{
                width: "75em",
                height: "700px",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1562559094-0739564bbc71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Descripción de la imagen"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Box>
          </Grid>

          <Grid item lg="4" xl="4">
            <Card
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#C52A00",
                  p: "5px 15px",
                  textAlign: "center",
                  width: "25%",
                  m: "20px",
                  borderRadius: "6px",
                  mb: "3px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ffff",
                    fontWeight: "bold",
                  }}
                >
                  Se agota rápido
                </Typography>
              </Box>

              <Box
                sx={{
                  p: "5px 15px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Desde ₡35,000.00
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    m: "5px 0",
                  }}
                >
                  (Por grupo hasta 8)
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    m: "5px 0",
                  }}
                >
                  Garantía del precio más bajo
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ 
                      m: "25px",
                      mr: "30px",
                      width: "50%"}} />
                  </LocalizationProvider>

           
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      People
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="People"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FullTour;
