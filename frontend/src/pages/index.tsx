import React from 'react';
import ProductCard from '../components/globals/ProductCard/ProductCard';
import { products } from '../utils/mockProducts'; // Simule produtos inicialmente
import Header from '../components/globals/Header/Header';
import Footer from "../components/globals/Footer/Footer";
import Carousel from "../components/globals/Carousel/Carousel"; // Supondo que este já esteja pronto


const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <Carousel />
      </section>

      {/* Produtos Promocionais */}
      <section className="promotional-products">
        <h2>Produtos em Promoção</h2>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Sessões para Tipos de Produtos */}
      <section className="product-categories">
        <h2>Explore por Categorias</h2>
        {/* Substitua por um componente que mostre categorias */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
