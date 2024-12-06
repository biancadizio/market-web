import React, { useState, useEffect } from "react";
import {
  CardContainer,
  ProductName,
  ProductPrice,
  ViewMoreLink,
  HeartIcon,
  ProductImage,
  AddToCartButton,
  PriceOld,
} from "./ProductCard-styles";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importando os ícones de coração

// Tipo para representar um produto
type Product = {
  id: string;
  name: string;
  price: number;
  priceOld?: number; // Preço anterior para promoções
  image: (id: string) => string; // Função que gera o caminho da imagem
  description: string;
};

// Função para salvar favoritos no localStorage ou cookies
const saveFavorite = (id: string) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// Função para remover favoritos
const removeFavorite = (id: string) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const updatedFavorites = favorites.filter(
    (productId: string) => productId !== id
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  priceOld,
  image,
  description,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      saveFavorite(id);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <CardContainer>
      <HeartIcon onClick={handleFavoriteClick}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="#bbb" />}
      </HeartIcon>
      <ProductImage src={image(id)} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>
        {priceOld && <PriceOld>R${priceOld.toFixed(2)}</PriceOld>}
        R${price.toFixed(2)}
      </ProductPrice>
      <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      <ViewMoreLink href={`/products/${id}`}>Ver mais</ViewMoreLink>
    </CardContainer>
  );
};

export default ProductCard;
