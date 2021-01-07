import React from 'react';
import { MainContainer, MenuLink, Navbar, NavbarRight } from './styles';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <MainContainer>
      <Navbar>
        <Link to={'./apply'}>
          <MenuLink>Kurssit</MenuLink>
        </Link>
        <Link to={'./apply'}>
          <MenuLink>Esimerkkiyritys</MenuLink>
        </Link>
        <Link to={'./apply'}>
          <MenuLink>Opiskelijalle</MenuLink>
        </Link>
      </Navbar>
      <NavbarRight>
        <Link to={'./login'}>
          <MenuLink id="login"> Kirjaudu</MenuLink>
        </Link>
      </NavbarRight>
    </MainContainer>
  );
};
