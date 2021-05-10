import React from 'react';

import Preloader from '../Preloader/Preloader';

import { useLocation } from 'react-router-dom';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';

import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

import MovieCardImage from '../../images/master.png';

function Movies() {



  let location = useLocation();

  const [isLoadingData, setIsLoadingData] = React.useState(true);

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 2,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 3,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 4,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 5,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
    },
    {
      id: 6,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
    {
      id: 7,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
    },
  ];

  React.useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, [])

  return (
    <main>
      <SearchForm />
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            data={MOVIES_CARD_LIST_DATA}
            locationPathname={location.pathname}
          />
          <ShowMoreButton
            onClick={() => console.log('Show more')}
          />
        </>
      )}
    </main>
  )
}

export default Movies;
