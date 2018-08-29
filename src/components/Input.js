import React from 'react';
import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  padding: 5px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  align-items: center;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    position: relative;
    padding: 0 0 0 30px;
    cursor: pointer;
  }
  & + label:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: -3px;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    transition: 0.2s;
    background-color: #ccc;
  }
  &:checked + label:before {
    content: '✔';
    color: white;
    text-align: center;
    line-height: 24px;
    top: -3px;
    width: 24px;
    height: 24px;
    transition: opacity 0.2s;
    border: none;
    background-color: #2196f3;
  }
  & + label:after {
    content: '';
    position: absolute;
    transition: 0.2s;
  }
  &:checked + label:after {
    left: 26px;
  }
`;

export const LabeledChechkbox = ({ labelText, htmlFor, ...props }) => (
  <CheckboxWrapper>
    <Checkbox {...props} />
    <label htmlFor={htmlFor}>{labelText}</label>
  </CheckboxWrapper>
);
