import React from 'react';
import { FooterContainer } from './Footer-styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} MarketWeb. Todos os direitos reservados.</p>
      <p>
        <a href="/terms">Termos de Uso</a> | <a href="/privacy">Política de Privacidade</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
