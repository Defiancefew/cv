import React from 'react';
import { ContactRow } from '../components/ContactRow';

export class Contacts extends React.Component {
  render() {
    return (
      <section>
        <h3>Контакты:</h3>
        <ContactRow rowName="mail" />
        <ContactRow rowName="phone" />
        <ContactRow rowName="telegram" />
        <ContactRow rowName="skype" />
        <ContactRow rowName="location" />
        <ContactRow rowName="github" />
      </section>
    );
  }
}
