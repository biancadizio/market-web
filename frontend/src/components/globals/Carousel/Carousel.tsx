import React, { useState } from "react";
import { products } from "../../../utils/mockProducts"; // Caminho correto para mockProducts.ts
import {
  CarouselWrapper,
  CarouselContainer,
  CarouselItem,
  ArrowButton,
} from "./Carousel-styles";
import Card from "../Card/Card"; // Importar o Card

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const product = products[currentIndex];

  return (
    <CarouselWrapper>
      <ArrowButton className="prev" onClick={prevProduct}>
        &#10094;
      </ArrowButton>

      <CarouselContainer>
        <CarouselItem>
          <Card
            image={product.image(product.id)}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        </CarouselItem>
      </CarouselContainer>

      <ArrowButton className="next" onClick={nextProduct}>
        &#10095;
      </ArrowButton>
    </CarouselWrapper>
  );
};

export default Carousel;
