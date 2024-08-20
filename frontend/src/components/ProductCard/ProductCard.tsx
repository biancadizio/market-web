import React from 'react';
import { Card, Description, Price, Title } from './ProductCard-styled';


interface ProductCardProps {
    name: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price }) => {
    return (
        <Card>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Price>${price.toFixed(2)}</Price>
        </Card>
    );
};

export default ProductCard;
