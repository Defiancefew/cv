import React from 'react';
import { Tag } from '../components/Tag';
import { Buzzwords } from '../components/Wrappers';
import { Section } from '../components/Section';
import * as buzzwordsUtils from '../utils/buzzwords';

const { constantsColors, labelNames, ...filterConstants } = buzzwordsUtils;
const constantsList = Object.keys(filterConstants);

const initialState = constantsList.reduce(
  (acc, value) => ({
    ...acc,
    [value]: true,
  }),
  {},
);

export class TechSkillCloud extends React.Component {
  state = initialState;

  changeFilter = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  render() {
    return (
      <Section name="Технологии">
        <Buzzwords>
          {constantsList.map(listName =>
            filterConstants[listName].map(buzzword => (
              <Tag color={constantsColors[listName]} key={buzzword}>
                {buzzword}
              </Tag>
            )),
          )}
        </Buzzwords>
      </Section>
    );
  }
}
