import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import ArticleAboutMe from '../ArticleAboutMe/ArticleAboutMe';

import Title from '../Title/Title';

import AboutMeList from '../AboutMeList/AboutMeList';

import AboutMePhoto from '../../images/about-me.jpg';

function AboutMe() {

  const ABOUT_ME_TITLE = 'Студент';

  const ABOUT_ME_ARTICLES_DATA = [
    {
      id: 1,
      title: 'Николай',
      subTitle: 'Веб-разработчик, 33 года',
      text: 'Я из Самары. Работаю Начальником ПТО в Строительной организации. Возводим промышленные, спортивные и развлекательные учреждение от этапа котлована и до ввода в эксплуатацию. В настоящее время с удовольствием занимаюсь изучением веб-программирования на JavaScript. Данное хобби помогает посмотреть на многие вещи по-новому. Говорят раз в 10 лет надо попробовать что-то новое в профессии - я задержался на 2 года уже - пора:))',
      linksTitle: 'Портфолио',
      links: [
        {
          id: 1,
          title: 'Vkontakte',
          link: 'https://vk.com/id9702680',
        },
        {
          id: 2,
          title: 'Github',
          link: 'https://github.com/razorka',
        },
      ],
      images: [
        {
          id: 1,
          src: AboutMePhoto,
          alt: 'Фото Nick',
        },
      ],
    },
  ];

  const ABOUT_ME_ARTICLE_STYLES = {
    article: 'about-me-article',
    articleHeader: 'about-me-article__header',
    articleItemsSection: 'about-me-article__items-section',
    articleSection: 'about-me-article__section',
  };

  const ABOUT_ME_ARTICLE_ID = 'student';

  const articlesMeMarkup = ABOUT_ME_ARTICLES_DATA.map((item) => (
    <ArticleAboutMe
      key={item.id}
      title={item.title}
      subTitle={item.subTitle}
      text={item.text}
      linksTitle={item.linksTitle}
      links={item.links}
      images={item.images}
    />
  ));

  return (
    <MainArticle
      id={ABOUT_ME_ARTICLE_ID}
      className={ABOUT_ME_ARTICLE_STYLES.article}
    >
      <MainArticle.Header
        className={ABOUT_ME_ARTICLE_STYLES.articleHeader}
      >
        <Title
          title={ABOUT_ME_TITLE}
        />
      </MainArticle.Header>
      <MainArticle.ArticlesSection
        className={ABOUT_ME_ARTICLE_STYLES.articleItemsSection}
      >
        {articlesMeMarkup}
      </MainArticle.ArticlesSection>
      <MainArticle.Section
        className={ABOUT_ME_ARTICLE_STYLES.articleSection}
      >
        <AboutMeList />
      </MainArticle.Section>
    </MainArticle>
  )
}

export default AboutMe;
