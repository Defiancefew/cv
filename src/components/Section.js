import { Heading } from './Heading';
import { SectionWrapper } from './Wrappers';
import React from 'react';

export class Section extends React.Component {
  state = {
    isOpen: true,
  };

  toggleSection = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { name, children } = this.props;

    return (
      <SectionWrapper>
        <Heading onClick={this.toggleSection}>{name}</Heading>
        {this.state.isOpen && children}
      </SectionWrapper>
    );
  }
}
