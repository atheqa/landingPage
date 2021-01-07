import React from 'react';
import { BoxContainer, MainContainer, SmallBox } from './styles';

export const CourseInfo = () => {
  return (
    <MainContainer>
      <BoxContainer>
        <SmallBox>
          <p>
            Ohjelmoinnin perusteet <br />
            <br />
            JavaScript + Node.js
          </p>
        </SmallBox>
        <SmallBox>
          <p>Git-versionhallinta</p>
        </SmallBox>
        <SmallBox>
          <p>
            CSS + React perusteet <br />
            <br />
            HTML + JSX
          </p>
        </SmallBox>
      </BoxContainer>
    </MainContainer>
  );
};
