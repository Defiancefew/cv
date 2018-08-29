import styled from 'styled-components';

export const DownloadButton = styled.a`
  background: black;
  border: none;
  color: white;
  padding: 15px;
  font-size: 1.3rem;
  max-width: 200px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
  @media print {
    display: none;
  }
`;
