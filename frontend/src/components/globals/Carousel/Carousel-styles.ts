import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.5s ease;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;


export const ProductName = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 12px;
`;

export const ViewMoreLink = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  background-color: #e9f5ff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #cfe7ff;
  }
`;
