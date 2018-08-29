import styled from 'styled-components';

export const Tag = styled.div`
  border-radius: 15px;
  margin: 5px;
  display: inline-block;
  padding: 5px 15px;
  background-color: ${props => props.color || 'cornflowerblue'};
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
