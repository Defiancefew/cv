import { Heading } from './Heading';
import { SectionWrapper } from './Wrappers';
import React from 'react';

export const Section = ({ name, children }) => (
  <SectionWrapper>
    <Heading>{name}</Heading>
    <div>{children}</div>
  </SectionWrapper>
);
