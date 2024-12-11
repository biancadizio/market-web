import React from "react";
import {
  CardWrapper,
  CardImage,
  CardDetails,
  CardName,
  CardPrice,
  CardDescription,
  CardCategory,
} from "./Card-styles";

interface CardProps {
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ image, name, price, description, category }) => {
  return (
    <CardWrapper>
      <CardImage src={image} alt={name} />
      <CardDetails>
        <CardCategory>{category}</CardCategory>
        <CardName>{name}</CardName>
        <CardPrice>{`R$ ${price.toFixed(2)}`}</CardPrice>
        <CardDescription>{description}</CardDescription>
      </CardDetails>
    </CardWrapper>
  );
};

export default Card;
