import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.nRed};

  > h1 {
    font-size: 1.2em;
    font-weight: 700;
    padding: 5px;
    color: ${(props) => props.theme.colors.light};
    text-align: center;
  }

  p {
    font-size: 1em;
    font-weight: 400;
    color: ${(props) => props.theme.colors.light};
    padding: 5px;
  }
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.nRed};
  padding-top: 50px;
`;

export const BoxContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const SmallBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  background-color: ${(props) => props.theme.colors.light};

  > img {
    width: 100%;
  }
`;
