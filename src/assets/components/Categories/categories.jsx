import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import catedral from './../../images/prueba.jpg'
import './categories.css'
import { Margin } from '@mui/icons-material';


export function CategoriesFeed(){
  let categoria=1;
  let style=categoria === 1 ?  '#adadad':
   categoria === 2 ? "#9ce2b1" : "#5086dc";
  

  return(
    <>
    <div className='feedCategorie'>
      <ImgMediaCard style={style} categorie={'City'}></ImgMediaCard>
      <ImgMediaCard style={style} categorie={'Mountain'}></ImgMediaCard>
      <ImgMediaCard style={style} categorie={'Beach'}></ImgMediaCard>
      <ImgMediaCard style={style} categorie={'City'}></ImgMediaCard>
      <ImgMediaCard style={style} categorie={'City'}></ImgMediaCard>
      <ImgMediaCard style={style} categorie={'City'}></ImgMediaCard>
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
          Catedral Cartago
        </Typography>
        <div className='categorieCard' style={{backgroundColor:prop.style}} >
        <Typography gutterBottom variant="h8" component="div" sx={{padding:0.5}}>
          {prop.categorie}
        </Typography>
        </div>
       
        <Typography variant="body2" color="text.secondary">
          La catedral de cartago es una zona importante y relevante para la historia
          de cartago y su gente, un lugar excelente para visitar
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

