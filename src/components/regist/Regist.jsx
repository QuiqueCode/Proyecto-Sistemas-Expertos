// Importa los componentes de Material-UI que necesitarás
import React, { useState } from 'react';
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Input,
    IconButton,
    InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Función principal del componente de registro
const RegistroUsuarioForm = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    // Manejadores de eventos para actualizar los estados
    const handleNombreChange = (event) => setNombre(event.target.value);
    const handleCorreoChange = (event) => setCorreo(event.target.value);
    const handleContrasenaChange = (event) => setContrasena(event.target.value);

    const handleClickMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de registro del usuario
        console.log('Registro exitoso:', { nombre, correo, contrasena });
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    type="text"
                    id="name"
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="surname1"
                    label="First Name"
                    type="text"
                    id="surname1"
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="surname2"
                    label="Second Name"
                    type="email"
                    id="emailAddress"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="emailAddress"
                    label="Email Address"
                    type="email"
                    id="emailAddress"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
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
            </FormControl>

            <Button type="submit" variant="contained" color="success">
                Create account
            </Button>
        </form>
    );
};

export default RegistroUsuarioForm;