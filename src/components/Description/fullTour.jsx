import { Typography, Box, Grid, Card, Button } from "@mui/material";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi2";

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
          {dataObject.data.name}
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
                  Desde ₡ {dataObject.data.price}
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
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pr: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        m: "25px",
                        mr: "30px",
                        width: "100%",
                        alignSelf: "flex-start",
                      }}
                    />
                  </LocalizationProvider>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Personas
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="People"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    ></Select>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    pl: "50px",
                    pb: "50px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Seleccione una hora"
                        sx={{
                          m: "25px",
                          mr: "30px",
                          width: "100%",
                          pb: "30px",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>

                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      backgroundColor: "#008A26",
                      color: "#ffff",
                      fontWeight: "bold",
                      height: "50px",
                    }}
                  >
                    Combrobar disponibilidad
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#EAFBF7",
                  m: "10px 25px",
                  textAlign: "left",
                  mb: "30px"
                }}
              >
                <Typography variant="body1" sx={{ p: "20px 60px" }}>
                  <FaRegCircleCheck />{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    Cancelación gratuita
                  </span>{" "}
                  hasta 24 horas antes del inicio de la experiencia (hora local)
                </Typography>
                <Typography variant="body1" sx={{ p: "20px 60px" }}>
                  <HiOutlineCreditCard />{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    Reservar ahora y pagar después
                  </span>{" "}
                  - Reserve plaza manteniendo la flexibilidad
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FullTour;
