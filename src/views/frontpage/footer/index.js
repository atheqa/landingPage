import React from 'react';
import {
  Container,
  LogoContainer,
  MainContainer,
  TextContainer,
} from './styles';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const FooterInfo = () => {
  return (
    <MainContainer>
      <Container>
        <TextContainer>
          <h2>Esimerkkiyritys</h2>
          <p>Y-tunnus 123456-7</p>
          <p>Testiosoite 1, 00100 Helsinki</p>
        </TextContainer>
      </Container>

      <Container>
        <TextContainer>
          <h2>Yhteydenotto</h2>
          <a href="mailto: info@esimerkkiyritys.com">
            <p>info@esimerkkiyritys.com</p>
          </a>
        </TextContainer>
      </Container>

      <Container>
        <TextContainer>
          <h2>Seuraa meitä</h2>

          <LogoContainer>
            <IconContext.Provider
              value={{
                style: { fontSize: '18px', color: '#F4F2F0' },
              }}
            >
              <a href="https://www.linkedin.com/home">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/?lang=fi">
                <FaTwitterSquare />
              </a>
              <a href="https://fi-fi.facebook.com/">
                <FaFacebookSquare />
              </a>
            </IconContext.Provider>
          </LogoContainer>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};
