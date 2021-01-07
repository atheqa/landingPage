import React from 'react';
import { ApplyInfo } from './apply';
import { CourseInfo } from './courses';
import { FooterInfo } from './footer';
import { HeaderInfo } from './header';
import { Navigation } from './navbar';
import { StartInfo } from './startInfo';
import { TeacherInfo } from './teacher';

export const FrontpageView = () => {
  return (
    <div>
      <Navigation />
      <HeaderInfo />
      <StartInfo />
      <TeacherInfo />
      <CourseInfo />
      <ApplyInfo />
      <FooterInfo />
    </div>
  );
};
