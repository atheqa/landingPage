import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../../ui';
import {
  ButtonContainer,
  ContainerLeft,
  ContainerRight,
  MainContainer,
  TextContainer,
} from './styles';
import study from '../../../images/study.jpg';

export const HeaderInfo = () => {
  return (
    <MainContainer>
      <ContainerLeft>
        <TextContainer>
          <h1>Esimerkkiyritys</h1>
          <h2>Opiskele moderniksi ohjelmistokehittäjäksi</h2>
          <ButtonContainer>
            <Link to={'/apply'}>
              <Button width="170px">Hae opiskelupaikkaa</Button>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </ContainerLeft>

      <ContainerRight
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${study})`,
        }}
      ></ContainerRight>
    </MainContainer>
  );
};
