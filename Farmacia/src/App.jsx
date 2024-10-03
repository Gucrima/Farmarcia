import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Informacoes from './components/Informacoes'
import Home from './pages/Home'
import Senhas from './pages/Senhas'
import Fofocas from './pages/Fofocas'



function App() {

  const [pagina, setPagina] = useState(<Home/>)

  return (
    <>
    <div className='navbar-Header'>

    <div className="imagem-logo">
    <img className='Logo-navbar' src="/images/farmarcia-logo-pq.PNG.png" alt="" />

    </div>
    
    <div className='conteiner-botoes'> 

    <button onClick={ () => {setPagina(<Home/>)}} className='Botao-navbar'>Home</button>
    <button onClick={ () => {setPagina(<Senhas/>)}} className='Botao-navbar'>Senhas</button>
    <button onClick={ () => {setPagina(<Fofocas/>)}} className='Botao-navbar'>Fofocas</button>
    <button  className='Botao-navbar'>Botão 2 </button>
  
    </div>
    </div>
     <Header/>

      <div className='conteiner-pagina'>
       {pagina}
       
       
      </div>


      

     <Informacoes/>
    </>
  )
}

export default App
