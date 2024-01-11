import { useState } from 'react'
import './App.css'
import RegistroUsuarioForm from './components/regist/Regist'
import Login from './components/login/Login'
import Navbar from './components/navbar/navbar'
import { CategoriesFeed } from './assets/components/Categories/categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Login></Login>
      <RegistroUsuarioForm></RegistroUsuarioForm>
    </>
  )
}

export default App
