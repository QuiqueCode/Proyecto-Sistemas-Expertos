import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.css'
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"white", boxShadow:0, padding:2}}>
        <Toolbar>
            <img id="logo" src="logo.png" alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#545353", fontWeight:"bold" }}>
            TRAVELO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
