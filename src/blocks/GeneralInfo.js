import React from 'react';
import { Section } from '../components/Section';
import { InfoRow } from '../components/InfoRow';

import { contactsList } from '../utils/contacts';
import { Anchor } from '../components/Anchor';

export class GeneralInfo extends React.Component {
  render() {
    return (
      <Section name="Общая информация">
        <InfoRow name="ФИО">Минин Вячеслав Сергеевич</InfoRow>
        <InfoRow name="Возраст">26 лет</InfoRow>
        <InfoRow name="Проживает">
          <Anchor href={contactsList.location}>г. Донецк</Anchor>
        </InfoRow>
        <InfoRow name="Языки">
          Русский(родной), Украинский (разговорный), Английский
          (upper-intermediate)
        </InfoRow>
        <InfoRow name="Зарплата (мес.)">от 120 000 руб.</InfoRow>
        <InfoRow name="График работы">Полный день</InfoRow>
        <InfoRow name="Занятость">Полная занятость</InfoRow>
        <InfoRow name="Формат работы">
          Удаленно, не готов к переезду, готов к коммандировкам
        </InfoRow>
      </Section>
    );
  }
}
