import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 160px;
`;

export const SmallBox = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.light};
  border-left: 8px solid ${(props) => props.theme.colors.beige};
  text-align: center;

  > p {
    font-size: 1em;
    font-weight: 400;
    margin: 30px 30px;
  }
`;
