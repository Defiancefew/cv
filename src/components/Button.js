import styled from 'styled-components';

export const DownloadButton = styled.a`
  background: black;
  text-decoration: none;
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

export const FilterButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    display: inline-block;
  }
`;
