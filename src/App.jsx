
import { useState } from 'react'
import './App.css'
import Singup from './components/regist/Regist'
import Login from './components/login/Login'
import { CategoriesFeed } from './components/Categories/categories'
import { BrowserRouter as Router, Route, NavLink, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ResponsiveAppBar from './components/navbar/navbarX';
import Footer from './components/footer/footer';
import Carousel from './components/Feed/Carousel';
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const[beach,setBeach]=useState([]);
  const[city,setCity]=useState([]);
  const[mountain,setMountain]=useState([]);

  const  getTours= async ()=>{
    const datos=  await axios.get('http://localhost:3000/api/tours');
    const beachFilter=(data)=>data.id_categoria_tour==1;
    const mountainFilter=(data)=>data.id_categoria_tour==2;
    const cityFilter=(data)=>data.id_categoria_tour==3;
    setBeach(datos.data.filter(beachFilter));
    setMountain(datos.data.filter(mountainFilter));
    setCity(datos.data.filter(cityFilter));
    console.log(datos.data)
    console.log("Playa",beach);
    console.log("Montana",mountain);
    console.log("Ciudad",city);
    }
      useEffect(()=>{
        getTours();
      },[]);

  return (
    <>
<Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/beach" element={<CategoriesFeed data={beach}/>} />
          <Route path="/mountain" element={<CategoriesFeed data={mountain}/>} />
          <Route path="/city" element={<CategoriesFeed data={city}/>} />
          <Route path="/moreInfo" element={<Moreinfo data={city}/>} />
        </Routes>
      </div>
    </Router>


    </>
  )
}

export default App