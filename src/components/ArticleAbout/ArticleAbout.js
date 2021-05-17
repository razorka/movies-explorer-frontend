import React from 'react';

import Article from '../Article/Article';

function ArticleAbout(props) {

  const STYLE_SETTINGS = {
    article: 'article-about',
    title: 'article-about__title',
    articleTextContainer: 'article-about__text-container',
    text: 'article-about__text',
  };

  return (
    <Article
      styleSettigs={STYLE_SETTINGS}
      title={props.title}
      text={props.text}
    />
  )
}

export default ArticleAbout;
