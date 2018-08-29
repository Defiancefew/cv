import React from 'react';

import { TechSkillCloud } from './TechSkillCloud';
import { JobExperience } from './JobExperience';
import { LanguageEducation } from './LanguageEducation';
import { GeneralInfo } from './GeneralInfo';
import { Skills } from './Skills';
import { About } from './About';

import { MainWrapper } from '../components/Wrappers';

export class Main extends React.Component {
  render() {
    return (
      <MainWrapper>
        <GeneralInfo />
        <Skills />
        <JobExperience />
        <TechSkillCloud />
        <LanguageEducation />
        <About />
      </MainWrapper>
    );
  }
}
