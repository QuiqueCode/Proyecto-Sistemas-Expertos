import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Singup from './components/regist/Regist';
import Login from './components/login/Login';
import { CategoriesFeed } from './components/Categories/categories';
import ResponsiveAppBar from './components/navbar/navbarX';
import Bodys from './components/Feed/Body';
import { FullTour } from './components/Description/fullTour';
import axios from 'axios';
import TransitionWrapper from './components/Transition/transition';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { NewProfile } from './components/profile/newProfile';
import { FullTour2 } from './components/Description/fullTour2';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0)

  const[beach,setBeach]=useState([]);
  const[city,setCity]=useState([]);
  const[mountain,setMountain]=useState([]);

  const  getTours= async ()=>{
    const datos=  await axios.get('https://recomendacionesse.onrender.com/api/tours');
    const beachFilter=(data)=>data.id_categoria_tour==1;
    const mountainFilter=(data)=>data.id_categoria_tour==2;
    const cityFilter=(data)=>data.id_categoria_tour==3;
    setBeach(datos.data.filter(beachFilter));
    setMountain(datos.data.filter(mountainFilter));
    setCity(datos.data.filter(cityFilter));
   
    }
      useEffect(()=>{
        getTours();
      },[]);




      
 
  return (
    <>
    
    <Router>
      {
        (localStorage.length !== 0) ? <ResponsiveAppBar /> : <Navbar></Navbar>
      }

        
      <TransitionWrapper>
      <div>
     
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/feed" element={<Bodys/>} />
          <Route path="city/fullTour" element={<FullTour2/>} />
          <Route path="mountain/fullTour" element={<FullTour2/>} />
          <Route path="beach/fullTour" element={<FullTour2/>} />
          <Route path="/beach" element={<CategoriesFeed data={beach} />} />
          <Route path="/mountain" element={<CategoriesFeed data={mountain} />} />
          <Route path="/city" element={<CategoriesFeed data={city} />} />
          <Route path="/fullTour" element={<FullTour/>} />
        
        </Routes>
      </div>
      </TransitionWrapper>
      <Routes>

      <Route path="/profile" element={<NewProfile />} />
      </Routes>
    </Router>
{
        (localStorage.length !== 0) ?    <Footer></Footer>:<></>

      }
    </>
  )
}

export default App