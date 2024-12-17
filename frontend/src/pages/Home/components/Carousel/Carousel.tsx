import React, { useState } from "react";
import { products } from "../../../../utils/mockProducts";
import {
  CarouselWrapper,
  CarouselContainer,
  CarouselItem,
  ArrowButton,
} from "./Carousel-styles";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; // Quantidade de produtos visíveis no carrossel

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  // A lógica para lidar com o carrossel contínuo
  const visibleProducts = [
    ...products.slice(currentIndex),
    ...products.slice(0, (currentIndex + itemsToShow) % products.length),
  ].slice(0, itemsToShow); // Certifica-se de que são apenas 'itemsToShow' itens

  return (
    <CarouselWrapper>
      <ArrowButton className="prev" onClick={prevProduct}>
        &#10094;
      </ArrowButton>

      <CarouselContainer>
        {visibleProducts.map((product, index) => (
          <CarouselItem key={index}>
            <img
              src={product.image(product.id)}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </CarouselItem>
        ))}
      </CarouselContainer>

      <ArrowButton className="next" onClick={nextProduct}>
        &#10095;
      </ArrowButton>
    </CarouselWrapper>
  );
};

export default Carousel;
