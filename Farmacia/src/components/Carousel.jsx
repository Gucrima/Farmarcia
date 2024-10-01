import React, { useState } from 'react';
import './Carousel.css'

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [items, setItems] = useState([
    { id: 1, image: './public/images/farmarcia-cartoes.PNG.png' },
    { id: 2, image: './public/images/farmarcia-camisetas.PNG.png' },
    { id: 3, image: './public/images/farmarcia-placa.PNG.png' },
  ]);

  const handleNext = () => {
    setActiveItem((activeItem + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveItem((activeItem - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === activeItem ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.image} />
          </div>
        ))}
      </div >

      <div className='botoes-conteiner-carousel'>

      <button className="carousel-prev" onClick={handlePrev}>
        ⬅
      </button>
      <button className="carousel-next" onClick={handleNext}>
        ➡
      </button>
      </div>
    </div>
  );
};

export default Carousel;