import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ff6b6b;
    }
  }
`;

export const CartIcon = styled.div`
  img {
    width: 24px;
    cursor: pointer;
  }
`;
