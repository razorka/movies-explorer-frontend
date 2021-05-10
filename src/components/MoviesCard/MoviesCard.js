import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import FavoritesButton from '../LikesButton/LikesButton';



function MoviesCard({
  data,
  locationPathname,
}) {

  const [isMarked, setIsMarked] = React.useState(data.isMarked);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
  };

  const MOVIES_CARD_STYLE_SETTINGS = {
    article: 'movies-card-article',
    annotation: 'movies-card-article__annotation',
    textContainer: 'movies-card-article__container',
    title: 'movies-card-article__title',
    subtitle: 'movies-card-article__subtitle',
    imageSection: 'movies-card-article__image-section',
    image: 'movies-card-article__image',
    favoriteButton: 'movies-card-article__like-button',
    removeFavoritesButtonIcon: 'movies-card-article__favorite-button-icon-remove',
    addFavoritesButtonIcon: 'movies-card-article__favorite-button-icon-add',
  };

  return (
    <MainArticle
      id={data.id}
      className={MOVIES_CARD_STYLE_SETTINGS.article}
    >
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.imageSection}
      >
        <img
          className={MOVIES_CARD_STYLE_SETTINGS.image}
          alt={data.imageAlt}
          src={data.imageSrc}
        />
      </MainArticle.Section>
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.annotation}
      >
        <div
          className={MOVIES_CARD_STYLE_SETTINGS.textContainer}
        >
          <h2
            className={MOVIES_CARD_STYLE_SETTINGS.title}
          >
            {data.title}
          </h2>
          <FavoritesButton
          className={MOVIES_CARD_STYLE_SETTINGS.favoriteButton}
          onClick={handleMarkMovieCard}
          locationPathname={locationPathname}
          isMarked={isMarked}
        />
        </div>
        <div
            className={MOVIES_CARD_STYLE_SETTINGS.subtitle}
          >
            {data.subtitle}
          </div>
      </MainArticle.Section>
    </MainArticle>
  )
}



export default MoviesCard;
