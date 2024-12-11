import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #1a1d27;
  color: #fff;
  padding: 40px 0;
  font-size: 14px;
  font-family: Arial, sans-serif;
  width: 100%;
`;

export const FooterStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterHeader = styled.div`
  max-width: 300px;

  h2 {
    color: #4caf50;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #aaa;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex: 1;

  h4 {
    color: #4caf50;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #aaa;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;

  ul {
    display: flex;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: #4caf50;
    font-size: 25px;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 50px;
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-size: 14px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResponsiveFooter = styled.div`
  @media (max-width: 768px) {
    ${FooterStack} {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    ${FooterHeader} {
      margin-bottom: 20px;
    }

    ${FooterLinks} {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }

    ${FooterSocial} {
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
  }
`;
