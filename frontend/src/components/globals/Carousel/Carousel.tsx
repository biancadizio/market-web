import React, { useState } from "react";
import { products } from "../../../utils/mockProducts"; // Caminho correto para mockProducts.ts
import {
  CarouselWrapper,
  CarouselContainer,
  CarouselItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemDescription,
  ArrowButton,
  CategoryTag,
} from "./Carousel-styles";

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
          <ItemImage src={product.image(product.id)} alt={product.name} />
          <ItemDetails>
            <CategoryTag>{product.category}</CategoryTag>
            <ItemName>{product.name}</ItemName>
            <ItemPrice>{`R$ ${product.price.toFixed(2)}`}</ItemPrice>
            <ItemDescription>{product.description}</ItemDescription>
          </ItemDetails>
        </CarouselItem>
      </CarouselContainer>

      <ArrowButton className="next" onClick={nextProduct}>
        &#10095;
      </ArrowButton>
    </CarouselWrapper>
  );
};

export default Carousel;
