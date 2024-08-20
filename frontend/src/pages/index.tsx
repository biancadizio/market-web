// External libraries
import React from 'react';

// Hooks
import { useProducts } from '../hooks/useProducts';

// Components
import Header from '@/components/Header/Header';
import ProductCard from '@/components/ProductCard/ProductCard';

// Styles
import styled from 'styled-components';

// Estilize o contêiner dos produtos
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const HomePage: React.FC = () => {
    const { products, loading } = useProducts();

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Header />
            <h1>Produtos</h1>
            <ProductsContainer>
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </ProductsContainer>
        </div>
    );
};

export default HomePage;
