import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
`;

export const CardDetails = styled.div`
  padding: 16px;
`;

export const CardName = styled.h3`
  font-size: 1.2rem;
  margin: 8px 0;
`;

export const CardPrice = styled.p`
  font-size: 1.1rem;
  color: #4caf50;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const CardCategory = styled.span`
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
