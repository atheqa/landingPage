import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const Navbar = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const NavbarRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
`;

export const MenuLink = styled.a`
  font-size: 0.9em;
  padding: 3px 6px 3px 6px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.green};
  transition: all 0.3s ease-in;
  display: inline-block;

  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
