import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import ButtonAppBar from './components/navbar/navbar'
import RegistroUsuarioForm from './components/regist/Regist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <Login></Login>
      <RegistroUsuarioForm></RegistroUsuarioForm>
    </>
  )
}

export default App
