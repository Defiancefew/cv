import React from 'react';
import { Section } from '../components/Section';
import { JobListItem } from '../components/JobListItem';
import { JobWrapper } from '../components/Wrappers';
import { SharpTag } from '../components/Tag';

import { veriboxStack, alicantoStack, setbrainsStack } from '../utils/jobStack';

export class JobExperience extends React.Component {
  renderStack = company =>
    company.map(tagName => <SharpTag key={tagName}>{tagName}</SharpTag>);

  render() {
    return (
      <Section name="Достижения и опыт">
        <JobWrapper>
          <JobListItem
            company="Setbrains"
            location="Москва"
            dates="Январь 2018 — по настоящее время (8 месяцев)"
          >
            <p>
              Написал игровую платформу и площадку для торговли игровыми
              предметами.
            </p>
            <p>
              За время работы удалось автоматизировать рутинную работу,
              интернационализировать приложения и провести масштабный
              рефакторинг проектов.
            </p>
            <div>{this.renderStack(setbrainsStack)}</div>
          </JobListItem>
          <JobListItem
            company="Alicanto"
            location="Москва"
            dates="Ноябрь 2016 — Декабрь 2017 (1 год и 2 месяца)"
          >
            <p>
              В Alicanto мы делали платформу для создания интернет-магазинов с
              использованием bleeding edge технологического стека.
            </p>
            <p>
              В мои обязанности входили создание двух версий админок для CRM,
              выбор технологического стека для команды, техническое обучение и
              code-review, составление задач, планирование спринтов, составление
              документации, помощь девопсу при деплое (docker, ci), покрытие
              кода тестами.
            </p>
            <p>
              За время работы удалось оптимизировать сборку проектов, вынести
              все компоненты в отдельный UI-kit. Проекты удалось перевести на
              typescript, css-in-js, код начал покрываться модульными тестами.
            </p>
            <div>{this.renderStack(alicantoStack)}</div>
          </JobListItem>
          <JobListItem
            position="Full-stack разработчик"
            company="Veribox"
            location="Москва"
            dates="Октябрь 2015 — Ноябрь 2016 (1 год и 2 месяца)"
          >
            <p>
              Veribox - стартап с центральным офисом расположенным в Флориде. В
              команде с разработчиками из США, Канады и Чехии я разрабатывал
              поисковую систему, которая могла отслеживать контент, нарушающий
              авторские права.
            </p>
            <p>
              В мои обязанности входила разработка микросеврисов и поисковых
              роботов, создание админок для управления пуллом воркеров,
              визуализация данных, покрытие кода тестами и написание
              документации.
            </p>
            <p>
              За время работы удалось автоматизировать рутинные процессы в
              компании, оптимизировать нагрузку на платформу, на 30% сократить
              расходы на сервера.
            </p>
            <div>{this.renderStack(veriboxStack)}</div>
          </JobListItem>
          <JobListItem
            position="Инженер службы релейной защиты и автоматики"
            company="ДТЭК ДонецкОблЭнерго"
            location="Донецк"
            dates="Октябрь 2012 — Cентябрь 2016 (3 года)"
          >
            <p>
              В мои обязанности входила диагностика и устранение неполадок в
              системах релейной защиты и автоматики на высоковольтных
              подстанциях, создание технической документации, проектирование и
              внедрение систем релейной защиты на предприятии.
            </p>
            <p>
              За время работы удалось внедрить систему учета протоколов наладки,
              создал инструменты мониторинга нагрузки на подстанции с
              применением веб технологий.
            </p>
            <div>
              <SharpTag>Angular 1.3</SharpTag>
            </div>
          </JobListItem>
        </JobWrapper>
      </Section>
    );
  }
}
