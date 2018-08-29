import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  padding: 5px;
`;

const Checkbox = styled.input`
  margin-left: 5px;
  margin-right: 10px;
`;

export const LabeledChechkbox = ({ labelText, htmlFor, ...props }) => (
  <Label htmlFor={htmlFor}>
    {labelText}
    <Checkbox type="checkbox" {...props} />
  </Label>
);
