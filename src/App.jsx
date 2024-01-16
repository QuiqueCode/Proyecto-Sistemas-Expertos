
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ResponsiveAppBar></ResponsiveAppBar>
<Carousel></Carousel>





     {/* <Router>
        <Routes>
          <Route path="/" element={<Login></Login>}/>
          <Route path="/singup" element={<Singup></Singup>}/>
        </Routes>
</Router>*/}
<Footer></Footer>

    </>
  )
}

export default App