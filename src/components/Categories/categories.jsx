import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import catedral from '../../assets/images/prueba.jpg'
import './categories.css'
import { Margin } from '@mui/icons-material';
import axios from 'axios';




export function CategoriesFeed(dataplaya){
  let categoria=0;

  let style=categoria === 1 ?  '#adadad':
   categoria === 2 ? "#9ce2b1" : "#5086dc";

   const [data, setData]=useState([]);

   const  getTours= async ()=>{
    const datos=  await axios.get('http://localhost:3000/api/tours');
    setData(datos.data)
    }

    

useEffect(()=>{
getTours();
},[]);

  return(
    <>
    <div className='feedCategorie'>
    {data.map((datos, index) => (
  <ImgMediaCard key={index} style={style} categorie={datos.nombre_categoria} description={datos.descripcion_tour} name={datos.nombre_tour} />
))}

 
    </div>
    </>
  );
}

export function ImgMediaCard(prop) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{height:200}}
        component="img"
        alt="green iguana"
        height="140"
        image={catedral}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {prop.name}
        </Typography>
        <div className='categorieCard' style={{backgroundColor:prop.style}} >
        <Typography gutterBottom variant="h8" component="div" sx={{padding:0.5}}>
          {prop.categorie}
        </Typography>
        </div>
       
        <Typography variant="body2" color="text.secondary">
          {prop.description}
        </Typography>
      </CardContent>
      <CardActions> <Button size="small" variant='contained'   sx={{
    backgroundColor: prop.style,
    width: 490,
    marginLeft: 0.3,
    color: 'black',
    '&:hover': {
      backgroundColor: prop.style, // Desactiva el cambio de color durante el hover
    },
  }}>BOOK</Button>
       
      </CardActions>
    </Card>
  );
}

