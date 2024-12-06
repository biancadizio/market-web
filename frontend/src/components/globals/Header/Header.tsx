import React from 'react';
import { HeaderContainer, Nav, Logo } from './Header-styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo href="/">MarketWeb</Logo>
      <Nav>
        <a href="/carrinho">Carrinho</a>
        <a href="/login">Login</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
