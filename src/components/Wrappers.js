import styled from 'styled-components';

export const Buzzwords = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Filters = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media print {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const JobListWrapper = styled.section`
  margin-bottom: 10px;
  border-top: 1px solid gray;
`;

export const ContactsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  > svg {
    margin-right: 10px;
  }
  font-size: 1rem;
`;

export const IconWrapper = styled.div`
  margin-right: 5px;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    > div {
      padding: 0 10px;
    }
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: table-row;
  margin: 10px;
  & > div {
    display: table-cell;
    padding: 5px;
  }
`;

export const JobWrapper = styled.div`
  & > section:nth-child(1) {
    border-top: none;
  }
`;

export const DropdownWrapper = styled.span`
  position: relative;
`;

export const DropdownChildren = styled.span`
  position: absolute;
  background: white;
  bottom: -200px;
  padding: 5px;
  left: 0;
  border-radius: 10px;
`;
