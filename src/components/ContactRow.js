import React from 'react';

import Skype from '../components/icons/Skype';
import Telegram from '../components/icons/Telegram';
import Phone from '../components/icons/Phone';
import Mail from '../components/icons/Mail';
import Location from '../components/icons/Location';
import Github from '../components/icons/Github';

import { contactsList } from '../utils/contacts';

import { ContactsWrapper } from '../components/Wrappers';
import { Anchor } from '../components/Anchor';

export class ContactRow extends React.Component {
  getIcon = iconName => {
    switch (iconName) {
      case 'phone':
        return <Phone />;
      case 'location':
        return <Location />;
      case 'mail':
        return <Mail />;
      case 'skype':
        return <Skype />;
      case 'telegram':
        return <Telegram />;
      case 'github':
        return <Github />;
      default:
        return `${iconName}:`;
    }
  };

  getRowDesc = rowName => {
    switch (rowName) {
      case 'location':
        return <Anchor href={contactsList[rowName]}>Донецк</Anchor>;
      case 'mail':
        return (
          <Anchor href={`mailto:${contactsList[rowName]}`}>
            {contactsList[rowName]}
          </Anchor>
        );
      case 'phone':
        return (
          <Anchor href={`tel:${contactsList[rowName]}`}>
            {contactsList[rowName]}
          </Anchor>
        );
      case 'telegram':
        return <Anchor href={contactsList[rowName]}>Defiancefew</Anchor>;
      case 'skype':
        return (
          <Anchor href={`skype:${contactsList[rowName]}`}>
            {contactsList[rowName]}
          </Anchor>
        );
      case 'github':
        return <Anchor href={contactsList[rowName]}>github/defiancefew</Anchor>;
      default:
        return <div>{contactsList[rowName]}</div>;
    }
  };

  render() {
    const { rowName } = this.props;

    return (
      <ContactsWrapper>
        {this.getIcon(rowName)}
        <div>{this.getRowDesc(rowName)}</div>
      </ContactsWrapper>
    );
  }
}
