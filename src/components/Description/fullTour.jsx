import { useEffect, useRef } from 'react';
import './modal.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Imglogo from '../../assets/images/MN.jpg'

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const FullTour = props => {

    return <div>
        <div className="div__content" style={{
            border: '2px solid #a3a3a3', borderRadius: '10px', marginTop: '5px'
        }}>

            <div className="modal__header" style={{ marginLeft: '1%', marginTop: '3%', borderRadius: '20px', display: 'inline-block' }}>
                <h2 style={{ margin: '0 4%', whiteSpace: 'nowrap' }}>Excursión de día completo al volcán Arenal, la catarata La Fortuna y los manantiales termales</h2>
            </div>



            <div className="modal__body">
                <div style={{ display: 'flex', marginBottom: '5%', height: '75%' }}>
                    <img src={Imglogo} alt="" style={{ flex: 1, marginLeft: '20px', marginRight: '40px', maxWidth: '650px', maxHeight: '500px', borderRadius: '20px' }} />
                    <div>
                        <p style={{ flex: 1, textAlign: 'justify', maxWidth: '600px', marginLeft: '3%', fontSize: '20px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime dolorem
                            asperiores laboriosam ad delectus ea. Tempora tempore repellendus laudantium fugiat
                            saepe mollitia eius illo possimus laborum consequuntur, tenetur neque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime dolorem
                            asperiores laboriosam ad delectus ea.
                        </p>


                    </div>
                    <div style={{ border: '2px solid #a3a3a3', borderRadius: '10px', marginTop: '5px', width: '500px', marginLeft: '5%' }}>
                        <div style={{ marginLeft: '20%', padding: '3%' }}>
                            <h4>Desde 95,5 US$</h4><p>Fecha de reserva</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>

                            <div style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", borderRadius: '10px', padding: '5px', maxWidth: '65%', marginTop: '5%' }}>
                                <p className="text-center">
                                    Cancelación gratuita hasta 24 horas antes del inicio de la experiencia
                                </p>
                            </div>


                            <Button variant="contained" color="success" style={{ marginTop: '20%', fontSize: '20px', textAlign: 'center', width: '70%' }}>
                                Reservar Tour
                            </Button>
                            <p></p>

                        </div>
                    </div>
                </div>


            </div>
            <Divider

                sx={{
                    width: '100%',  // Ajusta el ancho según tus necesidades
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Ajusta la opacidad y el tono según tus necesidades
                }}
            />
            <div className="modal__footer">
                <h3>Recomendaciones:</h3>

                <div style={{ display: 'flex', gap: '50px', overflowX: 'auto', marginLeft: '18%' }}>
                    <Card sx={{ maxWidth: 250, maxHeight: 325, backgroundColor: 'lightgray' }}>
                        <CardMedia
                            sx={{ maxHeight: 200, maxWidth: 300 }}
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={Imglogo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                hola
                            </Typography>
                            <div className='categorieCard' style={{ backgroundColor: 'red' }}>
                                <Typography gutterBottom variant="h8" component="div" sx={{ padding: 0.5 }}>
                                    hola 2
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                aqui aqui
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' sx={{
                                backgroundColor: 'lightskyblue',
                                width: 490,
                                marginLeft: 0.3,
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightblue',
                                },
                            }} onClick={() => setShowModal(false)}>
                                Ver
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 250, maxHeight: 325, backgroundColor: 'lightgray' }}>
                        <CardMedia
                            sx={{ maxHeight: 200, maxWidth: 300 }}
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={Imglogo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                hola
                            </Typography>
                            <div className='categorieCard' style={{ backgroundColor: 'red' }}>
                                <Typography gutterBottom variant="h8" component="div" sx={{ padding: 0.5 }}>
                                    hola 2
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                aqui aqui
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' sx={{
                                backgroundColor: 'lightskyblue',
                                width: 490,
                                marginLeft: 0.3,
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightblue',
                                },
                            }} onClick={() => setShowModal(false)}>
                                Ver
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 250, maxHeight: 325, backgroundColor: 'lightgray' }}>
                        <CardMedia
                            sx={{ maxHeight: 200, maxWidth: 300 }}
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={Imglogo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                hola
                            </Typography>
                            <div className='categorieCard' style={{ backgroundColor: 'red' }}>
                                <Typography gutterBottom variant="h8" component="div" sx={{ padding: 0.5 }}>
                                    hola 2
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                aqui aqui
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' sx={{
                                backgroundColor: 'lightskyblue',
                                width: 490,
                                marginLeft: 0.3,
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightblue',
                                },
                            }} onClick={() => setShowModal(false)}>
                                Ver
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 250, maxHeight: 325, backgroundColor: 'lightgray' }}>
                        <CardMedia
                            sx={{ maxHeight: 200, maxWidth: 300 }}
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={Imglogo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                hola
                            </Typography>
                            <div className='categorieCard' style={{ backgroundColor: 'red' }}>
                                <Typography gutterBottom variant="h8" component="div" sx={{ padding: 0.5 }}>
                                    hola 2
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                aqui aqui
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' sx={{
                                backgroundColor: 'lightskyblue',
                                width: 490,
                                marginLeft: 0.3,
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightblue',
                                },
                            }} onClick={() => setShowModal(false)}>
                                Ver
                            </Button>
                        </CardActions>
                    </Card>

                </div>
            </div>
        </div>
    </div >;
};

export default FullTour;

