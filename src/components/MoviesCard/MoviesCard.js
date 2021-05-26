import React from 'react';

import MainArticle from '../MainArticle/MainArticle';

import getFullImageUrl from '../../utils/getFullImageUrl';

import getTrailerUrl from '../../utils/getTrailerUrl';

import convertTime from '../../utils/convertTime';

import FavouritesButton from '../LikesButton/LikesButton';



function MoviesCard({
  data,
  locationPathname,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  // eslint-disable-next-line no-unused-vars
  const [movieData, setMovieData] = React.useState({
    country: data.country || 'Нет данных',
    director: data.director || 'Нет данных',
    duration: data.duration || 0,
    year: data.year || 'Нет данных',
    description: data.description || 'Нет данных',
    image: getFullImageUrl(data),
    trailer: getTrailerUrl(data),
    nameRU: data.nameRU || 'Нет данных',
    nameEN: data.nameEN || 'Нет данных',
    movieId: data.id,
    thumbnail: getFullImageUrl(data),
  })

  const handleClickFavouriteButton = () => {
    if (locationPathname === '/movies') {
      if (!data.saved) {
        onSaveMovie(movieData);
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
    id={data._id || movieData.movieId}
      className={MOVIES_CARD_STYLE_SETTINGS.article}
    >
      <MainArticle.Section
        className={MOVIES_CARD_STYLE_SETTINGS.imageSection}
      >
        <a
          href={movieData.trailer}
          target='_blank'
          aria-label={`Открыть трейлер фильма "${movieData.nameRU}" на youtube.com`} rel="noreferrer"
        >
          <img
            className={MOVIES_CARD_STYLE_SETTINGS.image}
            alt={movieData.nameRU || movieData.nameEN}
            src={movieData.image}
          />
        </a>
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
            {movieData.nameRU || movieData.nameEN}
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
            {convertTime(movieData.duration)}
          </div>
      </MainArticle.Section>
    </MainArticle>
  )
}



export default MoviesCard;
