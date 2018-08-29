import React from 'react';
import { Section } from '../components/Section';

export class About extends React.Component {
  render() {
    return (
      <Section name="О себе">
        <p>
          Мне нравится делиться знаниями, поэтому я помогаю друзьям войти в мир
          разработки.
        </p>
        <p>В июле 2018 года первый раз выступил на IT конференции.</p>
        <p>В свободное время люблю готовить, бегаю и кручу педали.</p>
      </Section>
    );
  }
}
