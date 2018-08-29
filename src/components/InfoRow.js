import React from 'react';
import { InfoWrapper } from './Wrappers';

export const InfoRow = ({ name, children }) => {
  return (
    <InfoWrapper>
      <div>
        <strong>{name}:</strong>
      </div>
      <div>{children}</div>
    </InfoWrapper>
  );
};
