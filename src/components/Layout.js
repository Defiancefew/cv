import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  min-height: 100%;
  margin: 0 auto 100px auto;
  @media (max-width: 800px) {
    display: block;
  }
`;
