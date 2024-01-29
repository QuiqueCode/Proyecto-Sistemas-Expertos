import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Imglogo from '../../assets/images/logoc.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';

const pages = ['Home', 'Playa', 'Montaña', 'Ciudad'];
const settings = ['Profile', 'Logout'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [categoryColor, setCategoryColor] = useState('white');
  const [datos, setDatos] = useState([]);

  const URL = "http://localhost:3000/api";


  const handleClick = (idCategory) => {
    console.log(idCategory);
    const userId = localStorage.getItem('idUser');
    axios.patch(`${URL}/counter?_id=${userId}&_category=${idCategory}`)
    .then((response) => {
      console.log(response);
    })
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('./')
    // Aquí puedes redirigir o realizar otras acciones después del cierre de sesión
  };
  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    // Función para cargar recomendaciones
    const loadRecommendations = () => {
      const userId = localStorage.getItem('idUser');
      if (userId) {
        axios.get(`${URL}/recommendations?id=${userId}`)
          .then((response) => {
            setDatos(response.data);
            const categoryId = response.data[0]?.idCategory;
            setCategoryColor(getBackgroundColor(categoryId));
          })
          .catch((error) => {
            console.error("Error al buscar:", error);
          });
      } else {
        console.error("No se encontró el valor 'idUser' en localStorage");
      }
    };
  
    // Cargar recomendaciones al montar el componente
    loadRecommendations();
  
    // Establecer temporizador para volver a cargar las recomendaciones cada 5 minutos
    const timerId = setInterval(loadRecommendations,  0.1 * 1000);
  
    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(timerId);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  const getBackgroundColor = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "#95bffb";
      case 2:
        return "#b9fa9c";
      case 3:
        return "#cacbd7";
      default:
        return "white";
    }
  };
  return (//aqui se cambiará el color dependiendo de la categoria
    <AppBar position="static" sx={{ backgroundColor: categoryColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img id="logo" src="logo.png" alt="" style={{
            width: '70px',
            height: '70px'
          }} />
          <Link to={'/feed'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#686967',
                textDecoration: 'none',
              }}
            >
              TRAVELO
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Playa">
                <Typography textAlign="center">Playa</Typography>
              </MenuItem>
              <MenuItem key="Montana">
                <Typography textAlign="center">Montaña</Typography>
              </MenuItem>
              <MenuItem key="Ciudad">
                <Typography textAlign="center">Ciudad</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TRAVELO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/beach'} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                key="playa"
                onClick={() => { handleClick(1)}}
                sx={{ my: 3, color: 'black', display: 'block', '&:hover': { color: '#3d3c3c' } }}
              >
                Playa
              </Button>
            </Link>

            <Link to={"/mountain"} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                key="montana"
                onClick={() => { handleClick(2)}}
                sx={{ my: 3, color: 'black', display: 'block', '&:hover': { color: '#3d3c3c' } }}
              >
                Montaña
              </Button>


            </Link>

            <Link to={"/city"} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                key="ciudad"
                onClick={() => { handleClick(3)}}
                sx={{ my: 3, color: 'black', display: 'block', '&:hover': { color: '#3d3c3c' } }}
              >
                Ciudad
              </Button>


            </Link>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <Avatar alt="Remy Sharp" src={Imglogo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                <Link to={'./profile'} style={{ textDecoration: 'none', color: 'inherit' }}>


                  <Typography textAlign="center">{settings[0]}</Typography>
                </Link>
              </MenuItem>



              <MenuItem key={settings[1]} onClick={() => handleLogout()}>
                
                  <Typography textAlign="center">{settings[1]}</Typography>
                
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;