import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.nRed};
`;

export const TextContainerLeft = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.nRed};
  padding: 15px 15px 25px 15px;

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

export const TextContainerRight = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.nRed};
  padding: 15px;

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
