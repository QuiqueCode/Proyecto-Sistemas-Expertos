import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CategoriesFeed } from './assets/components/Categories/categories'

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './assets/components/Categories/navbar';
import Footer from './assets/components/Categories/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
<Navbar />
<CategoriesFeed></CategoriesFeed>
<Footer></Footer>
</Router>
  )
}

export default App
