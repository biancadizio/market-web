import React from 'react';
import { CardContainer, ProductName, ProductPrice } from './ProductCard-styles';

type Product = {
  id: string;
  name: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R${product.price}</ProductPrice>
      <a href={`/products/${product.id}`}>Ver mais</a>
    </CardContainer>
  );
};

export default ProductCard;
