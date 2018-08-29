import React from 'react';
import { Tag } from '../components/Tag';
import { Buzzwords, Filters } from '../components/Wrappers';
import { LabeledChechkbox } from '../components/Input';
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
        <Filters>
          {constantsList.map(listName => (
            <LabeledChechkbox
              key={listName}
              labelText={labelNames[listName]}
              htmlFor={listName}
              checked={this.state[listName]}
              onChange={this.changeFilter}
              name={listName}
              id={listName}
            />
          ))}
        </Filters>
        <Buzzwords>
          {constantsList.map(
            listName =>
              this.state[listName] &&
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
