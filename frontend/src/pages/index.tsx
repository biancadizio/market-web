import React from "react";
import ProductCard from "../components/globals/ProductCard/ProductCard";
import { products } from "../utils/mockProducts"; // Produtos simulados
import Header from "../components/globals/Header/Header";
import Footer from "../components/globals/Footer/Footer";
import Carousel from "../components/globals/Carousel/Carousel"; // Componente de carousel

// Simulando categorias de produtos
const promotionalProducts = products.filter(
  (product) => product.category === "promoção"
);
const bestSellers = products.filter(
  (product) => product.category === "mais-vendidos"
);
const generalProducts = products.filter(
  (product) => product.category === "geral"
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Carousel de Banner Promocional */}
      <section className="hero">
        <Carousel
          images={[
            "/images/carousel/carousel-1-img1.jpg",
            "/images/carousel/carousel-1-img2.jpg",
            "/images/carousel/carousel-1-img3.jpg",
          ]}
        />
      </section>

      {/* Carousel de Produtos em Promoção */}
      <section className="promotional-products">
        <h2>Produtos em Promoção</h2>
        <Carousel products={promotionalProducts} />
      </section>

      {/* Carousel de Produtos Mais Vendidos */}
      <section className="best-sellers">
        <h2>Produtos Mais Vendidos</h2>
        <Carousel products={bestSellers} />
      </section>

      {/* Carousel de Produtos Gerais */}
      <section className="general-products">
        <h2>Produtos Gerais</h2>
        <Carousel products={generalProducts} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
