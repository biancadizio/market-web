import React from "react";
import {
  FooterWrapper,
  FooterStack,
  FooterHeader,
  FooterLinks,
  FooterSocial,
  FooterBottom,
} from "./Footer-styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterStack>
        <FooterHeader>
          <h2>Logo</h2>
          <p>Descrição do site ou da empresa, como uma tagline ou mensagem.</p>
        </FooterHeader>
        <FooterLinks>
          <div>
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a href="/sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
              <li>
                <a href="/politicas">Políticas</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/suporte">Central de Ajuda</a>
              </li>
            </ul>
          </div>
        </FooterLinks>
        <FooterSocial>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </FooterSocial>
      </FooterStack>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <ul>
          <li>
            <a href="/termos">Termos de Serviço</a>
          </li>
          <li>
            <a href="/privacidade">Política de Privacidade</a>
          </li>
        </ul>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
