import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  padding: 5px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
  align-items: center;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  background: none;
  margin-left: 5px;
  margin-right: 10px;
`;

export const LabeledChechkbox = ({ labelText, htmlFor, ...props }) => (
  <Label htmlFor={htmlFor}>
    {labelText}
    <Checkbox {...props} />
  </Label>
);
