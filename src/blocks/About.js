import React from 'react';
import { Section } from '../components/Section';

export class About extends React.Component {
  render() {
    return (
      <Section name="О себе">
        <p>
          Мне нравится делать крутой продукт, работать в команде и делиться
          знаниями.
        </p>
        <p>
          В июле 2018 года первый раз выступил на IT конференции в роли
          докладчика.
        </p>
        <p>
          В свободное время я изучаю новые технологии, помогаю друзьям перейти в
          мир разработки. А еще люблю готовить, бегаю и путешествую на
          велосипеде.
        </p>
      </Section>
    );
  }
}
