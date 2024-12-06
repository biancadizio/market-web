import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Logo, Nav, CartIcon } from './Header-styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">MarketWeb teste</Link>
      </Logo>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/products">Produtos</Link>
        <Link href="/carrinho">Carrinho</Link>
      </Nav>
      <CartIcon>
        <Link href="/carrinho">
          <img src="/icons/cart.svg" alt="Carrinho" />
        </Link>
      </CartIcon>
    </HeaderContainer>
  );
};

export default Header;
