import React from 'react';
import FilterIcon from './icons/Filter';
import { FilterButton } from './Button';
import { DropdownWrapper, DropdownChildren } from './Wrappers';

export class Dropdown extends React.Component {
  anchorEl = React.createRef();

  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.onDropdownClick);
    window.addEventListener('touchstart', this.onDropdownClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onDropdownClick);
    window.removeEventListener('touchstart', this.onDropdownClick);
  }

  onButtonClick = e => {
    e.stopPropagation();
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onDropdownClick = e => {
    e.stopPropagation();

    if (this.anchorEl.current && this.anchorEl.current.contains(e.target)) {
      return;
    }

    return this.setState({ isOpen: false });
  };

  render() {
    return (
      <DropdownWrapper>
        <FilterButton onClick={this.onButtonClick}>
          <FilterIcon />
        </FilterButton>
        {this.state.isOpen && (
          <DropdownChildren innerRef={this.anchorEl}>
            {this.props.children}
          </DropdownChildren>
        )}
      </DropdownWrapper>
    );
  }
}
