import Carousel from '../components/Carousel'
import './Home.css'
function Home() {
  return (
    <div className='conteiner-home'>
      <h1 className='ola-conteiner'>Olá bem vindo a Farmácia!</h1>
      <img className='logo-home' src="./public/images/farmarcia.PNG.png" alt="" />
      <Carousel/>
    </div>
  )
}

export default Home
