import styled from "styled-components";

// Paleta de cores
const COLORS = {
  background: "#212121",
  primaryText: "#fff",
  accentText: "#8e48ec",
  button: "#61339f",
  hoverButton: "#503096",
  inputBackground: "#333",
  inputText: "#fff",
  dropdownBackground: "#333",
};

// Header Container
export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${COLORS.background};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

// Logo
export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

// Barra de pesquisa
export const SearchBar = styled.input`
  background-color: ${COLORS.inputBackground};
  color: ${COLORS.inputText};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  width: 300px;
  margin-right: 20px;

  ::placeholder {
    color: ${COLORS.inputText};
  }
`;

// Menu de navegação
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

// Botões de navegação
export const NavButton = styled.button`
  background-color: ${COLORS.button};
  color: ${COLORS.primaryText};
  border: none;
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${COLORS.hoverButton};
  }
`;

// Dropdown
export const DropdownMenu = styled.div`
  position: absolute;
  background-color: ${COLORS.dropdownBackground};
  color: ${COLORS.primaryText};
  padding: 10px;
  display: none;
  top: 50px;
  right: 0;
  width: 200px;
  border-radius: 4px;

  ${NavButton}:hover & {
    display: block;
  }
`;

// Botão de carrinho
export const CartButton = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  height: 30px;
  width: 30px;
`;

// Icone de favoritar
export const FavoritesButton = styled(NavButton)`
  background-color: ${COLORS.accentText};
  margin-left: 20px;
`;
