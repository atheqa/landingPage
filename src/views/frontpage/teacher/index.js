import React from 'react';
import {
  BoxContainer,
  Container,
  MainContainer,
  SmallBox,
  TextContainer,
} from './styles';
import work from '../../../images/work.jpg';

export const TeacherInfo = () => {
  return (
    <MainContainer>
      <BoxContainer>
        <SmallBox>
          <img src={work} alt="work" />
        </SmallBox>
      </BoxContainer>

      <Container>
        <TextContainer>
          <h1>Opettajan esittely</h1>
        </TextContainer>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officia nihil deserunt porro expedita dolores, quam sint suscipit
            fugit necessitatibus consequuntur perspiciatis repellendus
            praesentium soluta nostrum mollitia magni provident dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officia nihil deserunt porro expedita dolores, quam sint suscipit
            fugit necessitatibus consequuntur perspiciatis repellendus
            praesentium soluta nostrum mollitia magni provident dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officia nihil deserunt porro expedita dolores, quam sint suscipit
            fugit necessitatibus consequuntur perspiciatis repellendus
            praesentium soluta nostrum mollitia magni provident dolorem!
          </p>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};
