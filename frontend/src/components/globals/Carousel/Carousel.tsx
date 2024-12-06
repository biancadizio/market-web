import React from 'react';
import { CarouselContainer } from './Carousel-styles';


const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <div className="carousel">

        <img src="../../../../public/banner1.jpg" alt="Promoção 1" />
        <img src="/public/banner2.jpg" alt="Promoção 2" />
        <img src="/public/banner3.jpg" alt="Promoção 3" />
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
