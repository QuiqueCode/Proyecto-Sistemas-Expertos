
import { useState } from 'react'
import './App.css'
import Singup from './components/regist/Regist'
import Login from './components/login/Login'
import Home from './assets/components/Categories/home';
import Navbar from './components/navbar/navbar'
import { CategoriesFeed } from './components/Categories/categories'
import { BrowserRouter as Router, Route, NavLink, Routes, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/singup" element={<Singup></Singup>}/>
          <Route path="/home" element={<Home></Home>}/>
        </Routes>
      </Router>


    </>
  )
}

export default App