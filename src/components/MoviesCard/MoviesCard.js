import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

// eslint-disable-next-line no-unused-vars
import getFullImageUrl from '../../utils/getFullImageUrl';

// eslint-disable-next-line no-unused-vars
import getTrailerUrl from '../../utils/getTrailerUrl';

import convertTime from '../../utils/convertTime';

import FavouritesButton from '../LikesButton/LikesButton';



function MoviesCard({
  data,
  locationPathname,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  const handleClickFavouriteButton = () => {

    if (locationPathname === '/movies') {
      if (!data.saved) {
        onSaveMovie({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailer: data.trailerLink,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          movieId: data.id,
          thumbnail: data.image,
        });
      } else {
        onDeleteSavedMovie(data._id);
      }
    } else if (locationPathname === '/saved-movies') {
      onDeleteSavedMovie(data._id);
    }
  };

  const MOVIES_CARD_STYLE_SETTINGS = {
    article: 'movies-card-article',
    annotation: 'movies-card-article__annotation',
    textContainer: 'movies-card-article__container',
    title: 'movies-card-article__title',
    subtitle: 'movies-card-article__subtitle',
    imageSection: 'movies-card-article__image-section',
    image: 'movies-card-article__image',
    favouriteButton: 'movies-card-article__like-button',
    removeFavouritesButtonIcon: 'movies-card-article__favourite-button-icon-remove',
    addFavouritesButtonIcon: 'movies-card-article__favourite-button-icon-add',
  };

  return (
    <MainArticle
    id={data._id}
      className={MOVIES_CARD_STYLE_SETTINGS.article}
    >
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.imageSection}
      >
        <img
          className={MOVIES_CARD_STYLE_SETTINGS.image}
          alt={data.nameEN}
          src={data.image}
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
            {data.nameRU}
          </h2>
          <FavouritesButton
          className={MOVIES_CARD_STYLE_SETTINGS.favouriteButton}
          onClick={handleClickFavouriteButton}
          locationPathname={locationPathname}
          isSaved={data.saved}
        />
        </div>
        <div
            className={MOVIES_CARD_STYLE_SETTINGS.subtitle}
          >
            {convertTime(data.duration)}
          </div>
      </MainArticle.Section>
    </MainArticle>
  )
}



export default MoviesCard;
