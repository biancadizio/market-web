import styled from "styled-components";

// Contêiner do card do produto
export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

// Estilo da imagem do produto
export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: opacity 0.3s;
`;

// Estilo do nome do produto
export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 10px 0;
`;

// Estilo do preço do produto
export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin: 10px 0;
  position: relative;
`;

// Preço riscado (promoção)
export const PriceOld = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 5px;
`;

// Link para mais informações sobre o produto
export const ViewMoreLink = styled.a`
  display: inline-block;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

// Ícone de coração para favoritar o produto
export const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

// Botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;
