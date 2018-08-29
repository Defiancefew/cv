import React from 'react';
import { ContactRow } from '../components/ContactRow';

export class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h3>Контакты:</h3>
        <ContactRow rowName="mail" />
        <ContactRow rowName="phone" />
        <ContactRow rowName="telegram" />
        <ContactRow rowName="skype" />
        <ContactRow rowName="location" />
      </div>
    );
  }
}
