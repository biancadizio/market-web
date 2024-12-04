import styled from 'styled-components';

// Estilo para o cartão do produto
export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px 0 0 0;
  color: #0070f3;
`;