import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ImgCity from './../../images/CityNavBar.png';
import ImgMontain from './../../images/MontanaNavBar.jpg';
import ImgBeach from './../../images/BeachNavBar.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/QuiqueCode/Proyecto-Sistemas-Expertos">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '10vh',
          }}
        >
          <CssBaseline />
  
          <Box
            component="footer"
            sx={{
              py: 1,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">
                My sticky footer can be found here.
              </Typography>
              <Copyright />
            </Container>
            <Container alt='images' sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 'auto', width:'20%'}}>
              <img
                src={ImgBeach}
                alt="Beach"
                style={{
                  width: '45%',
                  height: '15%',
                  padding: '5px',

                }}
              />
              <img
                src={ImgMontain}
                alt="Mountain"
                style={{
                  width: '45%',
                  height: '15%',
                  marginRight: '5px',

                }}
              />
              <img
                src={ImgCity}
                alt="City"
                style={{
                  width: '45%',
                  height: '15%',

                }}
              />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }