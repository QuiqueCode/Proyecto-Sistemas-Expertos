import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Navbar from '../navbar/Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import './login.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import Singup from '../regist/Regist';

function Login() {

    const [data, setData] = useState({
        _emailAddress: '',
        _password: ''
    });


    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setData((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }))
    }



    const inicioSesion = async () => {
        try {
            //Hay que buscar como configurar axios
            const response = await axios.post('http://localhost:3000/api/login', data);

            if (response.status === 200) {
                localStorage.setItem('idUser', response.data[0][0].id);
                Swal.fire({
                    icon: 'success',
                    title: 'Completado',
                    text: 'Inicio de sesión exitoso',
                    didClose: () => {
                        window.location = "/feed";
                    }
                });
                console.log("sacado");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR!',
                    text: 'Usuario o contraseña inválidos.',
                });
            }

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'ERROR!',
                text: 'Hubo un problema al intentar iniciar sesión.',
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        inicioSesion();
    };

    const [showForgotPassForm, setForgotPassForm] = useState(true);

    const changeForm = () => {
        setForgotPassForm(!showForgotPassForm);
    }

    return (
        <>


            <div id='container'>
                {showForgotPassForm ?
                    <div>
                        <div id="titles">
                            <h1>Log In Use</h1>
                            <div id="socialMedia">
                                <div><a href="#"><GoogleIcon fontSize='large' sx={{ color: "#E31717" }}></GoogleIcon></a></div>
                                <div><a href=""><FacebookIcon fontSize='large' sx={{ color: "#1783E3" }}></FacebookIcon></a></div>
                                <div><a href=""><TwitterIcon fontSize='large' sx={{ color: "#07C1FB" }}></TwitterIcon></a></div>
                            </div>
                            <p>Or Log In with your personal account</p>
                        </div>

                        <Card className='shadowCard' sx={{
                            boxShadow: 0,
                            width: 500,
                            borderColor: 'black',
                            '@media (max-width: 600px)': {
                                width: 300,
                            }
                        }} >

                            <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
                                <CssBaseline />
                                <Box
                                    sx={{
                                        marginTop: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="_emailAddress"
                                            label="Email Address"
                                            type="email"
                                            id="emailAddress"
                                            value={data._emailAddress}
                                            onChange={manejarCambios}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="_password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={data._password}
                                            onChange={manejarCambios}
                                        />
                                        <Button
                                            color='success'
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, fontWeight: "bold", borderRadius: 1 }}
                                            id='ingresar'
                                        >
                                            Log in
                                        </Button>
                                        <Button className='forgotPass' onClick={changeForm}>
                                            Create Account
                                        </Button>

                                    </Box>
                                </Box>

                            </Container>

                        </Card>
                    </div>

                    : <Singup changeForm={changeForm}></Singup>}
                <div id="background">
                    <img src="fondo2.png" alt="" />
                </div>
            </div>


        </>




    );
}

const styles = {
    card: {
        width: 500, // Ancho predeterminado para otros tamaños de pantalla
        borderColor: 'black',
        height: 470,
        '@media (max-width: 600px)': {
            width: 300, // Cambiar el ancho para dispositivos con un ancho máximo de 600px
        },
    },
};

export default Login;