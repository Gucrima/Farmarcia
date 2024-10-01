import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Informacoes from './components/Informacoes'
import Home from './pages/Home'



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
    <button  className='Botao-navbar'>Senhas</button>
    <button  className='Botao-navbar'>Botão</button>
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
