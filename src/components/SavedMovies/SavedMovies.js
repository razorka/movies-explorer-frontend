import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

import MovieCardImage from '../../images/master.png';

function SavedMovies() {

  let location = useLocation();

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 2,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
    {
      id: 5,
      title: 'Мастер и Маргарита',
      subtitle: '8ч 20м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
  ];

  return (
    <main>
      <SearchForm />
      <MoviesCardList
        data={MOVIES_CARD_LIST_DATA}
        locationPathname={location.pathname}
      />
    </main>
  )
}

export default SavedMovies;
