import styled from "styled-components";

// Container principal do carrossel
export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;
`;

// Container do carrossel que mantém os itens
export const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// Item individual do carrossel
export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 15px;
  text-align: center;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// Imagem do produto
export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Detalhes do produto (nome, preço, descrição)
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Nome do produto
export const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
`;

// Preço do produto
export const ItemPrice = styled.p`
  font-size: 1rem;
  color: #28a745;
  margin: 5px 0;
`;

// Descrição do produto
export const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 10px 0;
`;

// Categoria do produto (ex: "Promoção", "Mais Vendidos")
export const CategoryTag = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

// Botões de navegação (setas)
export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:hover {
    color: #007bff;
  }
`;

// Responsividade
// Ajusta o layout para telas menores (mobile)
export const CarouselItemMobile = styled(CarouselItem)`
  width: 250px;
  margin: 0 10px;
`;

export const CarouselWrapperMobile = styled(CarouselWrapper)`
  padding: 10px;
  max-width: 100%;
`;

export const CarouselContainerMobile = styled(CarouselContainer)`
  justify-content: flex-start;
`;
