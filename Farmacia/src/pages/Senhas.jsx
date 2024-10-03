import React from 'react'
import './Home.css'
import './Senhas.css'

function Senhas() {
  return (
    <div className='conteiner'>
       
      <div className='conteiner-balcao'>
    <h2 className='letras-balcao' >Balcão de Senhas</h2>
      </div>

      <div className='conteiner-input-balcoa'>
        <h3 className='texto-senhas'>Senhas</h3>
        <input className='input-senha' type="text" disabled/>
        <h3 className='texto-senhas'>Senhas Preferenciais</h3>
        <input className='input-senha' type="text" disabled/>
      </div>

      <p></p>

      <div className='conteiner-botoes-balcoa'>
      <button className='botoes-senha'>Senha</button>
      <button className='botoes-senha'>Senha Preferencial</button>
      </div>
    </div>
  )
}

export default Senhas
