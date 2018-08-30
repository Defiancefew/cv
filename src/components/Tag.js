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
  @media print {
    background-color: white;
    color: black;
    padding: 0;
  }
`;

export const SharpTag = styled(Tag)`
  border-radius: 0;
  background-color: #2892d7;
  margin: 5px 5px 5px 0;
  @media print {
    color: white;
  }
`;
