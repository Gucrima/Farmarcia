import React from 'react'
import { useState } from 'react'
import Home from '../pages/Home'
import './Header.css'

function Header() {

    const [pagina, setPagina] = useState()

  return (
    <div className='navbar-Header'>

      <div className="imagem-logo">
        <img className='Logo-navbar' src="/images/farmarcia-logo-pq.PNG.png" alt="" />
      </div>

        <button onClick={ () => useState(<Home/>)} className='Botao-navbar'>Home</button>
        <button  className='Botao-navbar'>Senha</button>
        <button  className='Botao-navbar'>Botão</button>
        <button  className='Botao-navbar'>Botão 2 </button>
        
    </div>
  )
}

export default Header
