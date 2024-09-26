import './App.css'
import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Home from './pages/Home'



function App() {

  const [pagina, setPagina] = useState(<Home/>)

  return (
    <>
     <Header/>
     <Body/>
     {pagina}
    </>
  )
}

export default App
