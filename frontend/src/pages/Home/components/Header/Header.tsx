import React, { useState } from "react";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  NavMenu,
  NavButton,
  DropdownMenu,
  CartButton,
  CartIcon,
  FavoritesButton,
} from "./Header-styles";

// Exemplo de ícones de carrinho e logo (substitua por ícones reais ou SVG)
const cartIcon = "/images/cart.svg";
const logoImage = "/images/logo.svg";

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isCartPopupVisible, setCartPopupVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const toggleCartPopup = () => setCartPopupVisible(!isCartPopupVisible);

  return (
    <HeaderContainer>
      <Logo src={logoImage} alt="Logo da empresa" />

      {/* Barra de pesquisa */}
      <SearchBar type="text" placeholder="Buscar produtos..." />

      {/* Menu de navegação */}
      <NavMenu>
        <NavButton onClick={toggleDropdown}>Categorias</NavButton>
        {isDropdownVisible && (
          <DropdownMenu>
            <div>Categoria 1</div>
            <div>Categoria 2</div>
            <div>Categoria 3</div>
          </DropdownMenu>
        )}

        {/* Carrinho */}
        <CartButton onClick={toggleCartPopup}>
          <CartIcon src={cartIcon} alt="Carrinho" />
        </CartButton>

        {/* Produtos Favoritados */}
        <FavoritesButton>Favoritos</FavoritesButton>

        {/* Login/Logout */}
        <NavButton>Minha Conta</NavButton>
      </NavMenu>

      {/* Popup do Carrinho */}
      {isCartPopupVisible && (
        <div className="cart-popup">
          <h3>Seu Carrinho</h3>
          <button onClick={toggleCartPopup}>Fechar</button>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
