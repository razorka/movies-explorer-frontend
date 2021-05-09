import React from 'react';

import Title from '../Title/Title';

import ArticleAbout from '../ArticleAbout/ArticleAbout';

import Chart from '../Chart/Chart';

function AboutProject() {
  const ABOUT_PROJECT_TITLE = 'О проекте';

  const ABOUT_PROJECT_ARTICLES_DATA = [
    {
      id: 1,
      title: 'Дипломный проект включал 5 этапов',
      text: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
    },
    {
      id: 2,
      title: 'На выполнение диплома ушло 5 недель',
      text: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
    },
  ];

  const articlesAboutMarkup = ABOUT_PROJECT_ARTICLES_DATA.map((item) => (
    <ArticleAbout
      key={item.id}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <article
      className="about-project-article"
      id="about-project"
    >
      <header
        className="about-project-article__header"
      >
        <Title
          title={ABOUT_PROJECT_TITLE}
        />
      </header>
      <section
        className="about-page-arcticle__items-section"
      >
        {articlesAboutMarkup}
      </section>
      <Chart />
    </article>
  )
}

export default AboutProject;
