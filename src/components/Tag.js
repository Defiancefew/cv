import styled from 'styled-components';

export const Tag = styled.div`
  border-radius: 15px;
  margin: 5px;
  display: inline-block;
  white-space: nowrap;
  padding: 5px 15px;
  background-color: ${({ color }) => color || 'cornflowerblue'};
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
