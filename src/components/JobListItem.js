import React from 'react';
import { JobListWrapper } from './Wrappers';
import { CompanyName, JobListHeading } from './Heading';

export class JobListItem extends React.Component {
  render() {
    const {
      position = 'Frontend разработчик',
      company,
      dates,
      location = 'Москва',
      children,
    } = this.props;

    return (
      <JobListWrapper>
        <JobListHeading>
          <CompanyName>
            {company}, {position}
          </CompanyName>
          <div>
            <span>{location}</span> {dates}
          </div>
        </JobListHeading>
        {children}
      </JobListWrapper>
    );
  }
}
