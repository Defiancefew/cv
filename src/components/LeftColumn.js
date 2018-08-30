import styled from 'styled-components';

export const LeftColumn = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 0 0 300px;
  padding-left: 5px;
  margin-right: 10px;
  padding-bottom: 10px;
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
  @media only screen and (max-width: 650px) {
    display: block;
  }
  @media print {
    flex-direction: row;
  }
`;
