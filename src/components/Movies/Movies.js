import React from 'react';

import Preloader from '../Preloader/Preloader';

import { useLocation } from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import MOVIES_ERRORS_TEXTS from '../../constants/movies-errors-texts';

function Movies({
  isLoadingData,
  resStatus,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteSavedMovie,
}) {



  let location = useLocation();

  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    console.log(data);
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
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          {isMoviesApiError ? (
            <p>
              {MOVIES_ERRORS_TEXTS.BASE_ERROR}
            </p>
          ) : (
            <>
              <MoviesCardList
                data={moviesData}
                locationPathname={location.pathname}
                onSaveMovie={onSaveMovie}
                onDeleteSavedMovie={onDeleteSavedMovie}
              />
              <ShowMoreButton
                onClick={() => console.log('Show more')}
              />
            </>
          )}

        </>
      )}
    </main>
  )
}

export default Movies;
