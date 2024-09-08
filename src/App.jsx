import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-slate-950 ' >
    <Header />
    
      
      <Home />
      <Footer />


     </div> 
    </>
  )
}

export default App
