import React from 'react';
import { BoxContainer, Container, MainContainer, SmallBox } from './styles';

export const StartInfo = () => {
  return (
    <MainContainer>
      <Container>
        <BoxContainer>
          <SmallBox>
            <h2>Aloita alusta ilman taustavaatimuksia</h2>
          </SmallBox>
          <SmallBox>
            <h2>Opi käytännön koodausta ammattilaisen opastuksella</h2>
          </SmallBox>
          <SmallBox>
            <h2>Kehity valmiiksi työmarkkinoille</h2>
          </SmallBox>
        </BoxContainer>
      </Container>
    </MainContainer>
  );
};
