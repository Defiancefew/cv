import React from 'react';
import { Section } from '../components/Section';

export class LanguageEducation extends React.Component {
  render() {
    return (
      <Section name="Образование и языки">
        <p>
          Свободно читаю техническую документацию на <strong>английском</strong>
          , имеются сертификаты о прохождении экзаменов{' '}
          <strong>Cambridge CAT, PET, FCE</strong> (upper intermediate). Есть
          опыт работы англоговорящем стартапе.
        </p>

        <p>
          В 2013 закончил Электротехнический факультет <strong>ДонНТУ</strong>,
          кафедра "Электроснабжение промышленных городов и предприятий".
        </p>
      </Section>
    );
  }
}
