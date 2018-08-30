import styled from 'styled-components';

export const DownloadButton = styled.a`
  background: black;
  display: block;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  border: none;
  color: white;
  padding: 15px;
  font-size: 1.3rem;
  max-width: 200px;
  margin: 10px auto 0 auto;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 650px) {
    display: block;
    max-width: 100%;
  }
  @media print {
    display: none;
  }
`;

export const SmallerButton = styled(DownloadButton)`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 10px;
    background-color: transparent;
    > svg {
      fill: black;
    }
  }
  @media print {
    display: none;
  }
  @media (max-width: 650px) {
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
