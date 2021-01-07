import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.grey};
  padding: 15px 15px 0px 15px;

  > h2 {
    font-size: 1.2em;
    font-weight: 700;
    padding: 5px;
    color: ${(props) => props.theme.colors.light};
  }

  p {
    font-size: 1em;
    font-weight: 400;
    color: ${(props) => props.theme.colors.light};
    padding: 5px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: start;
  padding: 5px;

  > a {
    margin-right: 3px;
  }
`;

export const Container = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey};
  margin-top: 50px;
`;
