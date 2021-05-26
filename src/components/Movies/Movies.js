import React from 'react';

import Preloader from '../Preloader/Preloader';

import { useLocation } from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

import Notification from '../Notification/Notification';

import NO_MOVIES_FOUND_TEXT from '../../constants/no-movies-found-text';

import MOVIES_ERRORS_TEXTS from '../../constants/movies-errors-texts';

function Movies({
  isLoadingData,
  resStatus,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteSavedMovie,
  isNoMoviesFound,
}) {



  let location = useLocation();

  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    onSubmit(data);
  }

  const handleErrors = () => {
    if (resStatus) {
      switch (resStatus) {
        case 200:
          setIsMoviesApiError(false);
          break;
        default:
          setIsMoviesApiError(true);
          break;
      };
    };
  };

  React.useEffect(() => {
    handleErrors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resStatus])

  return (
    <main>
      <SearchForm
        onSubmit={handleSubmit}
      />
      {!isLoadingData && isNoMoviesFound && (
        <Notification
          text={NO_MOVIES_FOUND_TEXT.BASE_TEXT}
        />
      )}
      {isLoadingData && (
        <Preloader />
      )}
      {isMoviesApiError && (
        <Notification
          text={MOVIES_ERRORS_TEXTS.BASE_ERROR}
        />
      )}
      <MoviesCardList
        data={moviesData}
        locationPathname={location.pathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  )
}

export default Movies;
