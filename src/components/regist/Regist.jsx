// Importa los componentes de Material-UI que necesitarás
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
    Button,
    TextField,
    FormControl,
} from '@mui/material';
import "./regist.css"

// Función principal del componente de registro
const Singup = ({ changeForm }) => {
    const [data, setData] = useState({
        _name: '',
        _surname1: '',
        _surname2: '',
        _emailAddress: '',
        _password: ''
    });

    const manejarCambios = (e) => {
        const { name, value } = e.target;
        setData((prevDatos) => ({
            ...prevDatos,
            [name]: value,
        }));
    };

    const handleClickMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const createUser = async (e) => {
        e.preventDefault();
        try {
            //Hay que buscar como configurar axios
            const response = await axios.post('http://localhost:3000/api/users', data);
            console.log(response, " ", data)
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Completed',
                    text: 'User Created Successfully',
                    didClose: () => {
                        window.location = "/";
                    }
                });
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

    return (
        <div id="form">
            <div>
                <form onSubmit={createUser}>
                    <h1>Sign Up Form</h1>
                    <FormControl fullWidth>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="_name"
                            label="Name"
                            type="text"
                            id="name"
                            value={data._name}
                            onChange={manejarCambios}
                        />
                    </FormControl>

                    <FormControl fullWidth >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="_surname1"
                            label="First Name"
                            type="text"
                            id="surname1"
                            value={data._firstName}
                            onChange={manejarCambios}
                        />
                    </FormControl>

                    <FormControl fullWidth >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="_surname2"
                            label="Second Name"
                            type="text"
                            value={data._secondName}
                            onChange={manejarCambios}
                        />
                    </FormControl>
                    <FormControl fullWidth >
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
                    </FormControl>
                    <FormControl fullWidth >
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
                    </FormControl>

                    <Button type="submit" fullWidth sx={{ mt: 5, fontWeight: "bold", mb: 2 }} variant="contained" color="success">
                        Create account
                    </Button>
                    <Button className='' onClick={changeForm} >
                        Back
                    </Button>
                </form>
            </div>

        </div>
    );
};

export default Singup;