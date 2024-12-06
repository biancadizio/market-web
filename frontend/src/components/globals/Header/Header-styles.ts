import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const Nav = styled.nav`
  a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;
