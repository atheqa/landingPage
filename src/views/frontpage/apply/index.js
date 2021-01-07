import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui';
import {
  Container,
  MainContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const ApplyInfo = () => {
  return (
    <MainContainer>
      <Container>
        <TextContainerLeft>
          <h1>Miksi hakea meille?</h1>
        </TextContainerLeft>
        <TextContainerLeft>
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
        </TextContainerLeft>

        <Link to={'/apply'}>
          <Button width="200px">Hae opiskelupaikkaa</Button>
        </Link>
      </Container>

      <Container>
        <TextContainerRight>
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
        </TextContainerRight>
      </Container>
    </MainContainer>
  );
};
