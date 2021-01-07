import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const ContainerLeft = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(-45deg);
  overflow: hidden;
  margin-left: -20%;
  z-index: 3;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const ContainerRight = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -17%;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.nRed};
  padding: 15px 15px 0px 15px;
  transform: skewX(45deg);

  > h1 {
    font-size: 3.5em;
    font-weight: 700;
    padding: 5px 0 0 400px;
    color: ${(props) => props.theme.colors.light};
  }

  > h2 {
    font-size: 1em;
    font-weight: 400;
    padding: 15px 0 0 400px;
    color: ${(props) => props.theme.colors.light};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 150px;

  > a {
    padding: 30px 40px 0 0px;
  }
`;
