import React from 'react';

import Title from '../Title/Title';

import MainArticle from '../MainArticle/MainArticle';

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

  const ABOUT_PROJECT_ARTICLE_STYLES = {
    article: 'about-project-article',
    articleHeader: 'about-project-article__header',
    articleItemsSection: 'about-page-arcticle__items-section',
    articleSection: 'about-page-arcticle__section',
  };

  const TECHS_ARTICLE_ID = 'about-project';

  return (
    <MainArticle
      id={TECHS_ARTICLE_ID}
      className={ABOUT_PROJECT_ARTICLE_STYLES.article}
    >
      <MainArticle.Header
        className={ABOUT_PROJECT_ARTICLE_STYLES.articleHeader}
      >
        <Title
          title={ABOUT_PROJECT_TITLE}
        />
      </MainArticle.Header>
      <MainArticle.ArticlesSection
        className={ABOUT_PROJECT_ARTICLE_STYLES.articleItemsSection}
      >
        {articlesAboutMarkup}
      </MainArticle.ArticlesSection>
      <MainArticle.Section
        className={ABOUT_PROJECT_ARTICLE_STYLES.articleSection}
      >
        <Chart />
      </MainArticle.Section>
    </MainArticle>
  )
}

export default AboutProject;
