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
import './login.css'


function Login() {


    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Navbar></Navbar>
            <div id='container'>
                <div>
                    <div id="titles">
                        <h1>Log In Use</h1>
                        <div id="socialMedia">
                            <div><a href="#"><GoogleIcon fontSize='large' sx={{color:"#E31717"}}></GoogleIcon></a></div>
                            <div><a href=""><FacebookIcon fontSize='large' sx={{color:"#1783E3"}}></FacebookIcon></a></div>
                            <div><a href=""><TwitterIcon fontSize='large' sx={{color:"#07C1FB"}}></TwitterIcon></a></div>
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

                        <Container component="main" maxWidth="xs">
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
                                        name="emailAddress"
                                        label="Email Address"
                                        type="email"
                                        id="emailAddress"
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
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
                                    <Link href="/singup" variant="body1">
                                        Create an account
                                    </Link>

                                </Box>
                            </Box>

                        </Container>

                    </Card>
                </div>
                <div id="background">
                    <img src="fondo.png" alt="" />
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