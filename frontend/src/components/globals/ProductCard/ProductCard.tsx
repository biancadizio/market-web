import React from 'react';
import { CardContainer, ProductName, ProductPrice, ViewMoreLink } from './ProductCard-styles';

type Product = {
  id: string;
  name: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <div>Produto não disponível</div>;
  }

  return (
    <CardContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>
      <ViewMoreLink href={`/products/${product.id}`}>Ver mais</ViewMoreLink>
    </CardContainer>
  );
};

export default ProductCard;
