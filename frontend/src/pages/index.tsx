import React from 'react';
import ProductCard from '../components/globals/ProductCard/ProductCard';
import { products } from '../utils/mockProducts'; // Simule produtos inicialmente
import Header from '../components/globals/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Produtos Promocionais</h2>
          <div>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
