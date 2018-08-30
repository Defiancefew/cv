import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  background-color: black;
  color: white;
  padding: 10px;
  margin: 0 0 5px 0;
`;

export const CompanyName = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

export const JobListHeading = styled.section`
  padding: 10px 0;
`;

export const FullName = styled.h1`
  margin: 0px;
`;

export const MainPosition = styled.h3`
  margin: 0;
`;
