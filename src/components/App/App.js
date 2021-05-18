import React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import moviesApi from '../../utils/MoviesApi';

import searchFilter from '../../utils/searchFilter';

import mainApi from '../../utils/MainApi';

import Header from '../Header/Header';

import Modal from '../Modal/Modal';

import Profile from '../Profile/Profile';

import Main from '../Main/Main';

import SavedMovies from '../SavedMovies/SavedMovies';

import Movies from '../Movies/Movies';

import Register from '../Register/Register';

import Login from '../Login/Login';

import NotFound from '../NotFound/NotFound';

import Footer from '../Footer/Footer';

import MobileNavigation from '../MobileNavigation/MobileNavigation';

import MobileAccountLink from '../MobileAccountLink/MobileAccountLink';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Preloader from '../Preloader/Preloader';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [isLoadingMoviesData, setIsLoadingMoviesData] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingUpdateCurrentUser, setIsLoadingUpdateCurrentUser] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [currentUserData, setCurrentUserData] = React.useState({});
  const [savedMoviesData, setSavedMoviesData] = React.useState([]);
  const [moviesData, setMoviesData] = React.useState([]);
  const [authResStatus, setAuthResStatus] = React.useState(null);
  const [tokenAuthResStatus, setTokenAuthResStatus] = React.useState(null);
  const [registrationResStatus, setRegistrationResStatus] = React.useState(null);
  const [updateCurrentUserResStatus, setUpdateCurrentUserResStatus] = React.useState(null);
  const [moviesApiResStatus, setMoviesApiResStatus] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [saveFavouriteMovieResStatus, setSaveFavouriteMovieResStatus] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [getSavedMoviesResStatus, setGetSavedMoviesResStatus] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [deleteSavedMovieResStatus, setDeleteSavedMovieResStatus] = React.useState(null);

  const history = useHistory();

  const saveCurrentUserDataToLocalStorage = (data) => {
    const { name, email, _id } = data;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userId', _id);
  }

  const handleResetResStatus = () => {
    if (
      tokenAuthResStatus ||
      updateCurrentUserResStatus ||
      registrationResStatus ||
      authResStatus
    ) {
      setUpdateCurrentUserResStatus(null);
      setRegistrationResStatus(null);
      setTokenAuthResStatus(null);
      setAuthResStatus(null);
    };
  };

  const tokenCheck = React.useCallback(
    () => {
      const token = localStorage.getItem('jwt');

      if (token) {
        setIsLoadingData(true);
        mainApi.checkToken(token)
          .then(
            (res) => {
              setTokenAuthResStatus(res.status);
              setLoggedIn(true);
              setCurrentUserData(res.data);
              saveCurrentUserDataToLocalStorage(res.data);
            },
            (err) => {
              setTokenAuthResStatus(err);
            },
          )
          .finally(() => {
            setIsLoadingData(false);
          })
      }
    }, []
  );

  React.useEffect(() => {
    tokenCheck();
    handleResetResStatus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location])

  const handleSignin = (data) => {
    setIsLoadingSignin(true);
    mainApi.authorize(data)
      .then((res) => {
        setAuthResStatus(res.status);
        localStorage.setItem('jwt', res.data.token);
        setLoggedIn(true);
        tokenCheck();
        history.push('/movies');
      })
      .catch((err) => {
        setAuthResStatus(err);
      })
      .finally(() => {
        setIsLoadingSignin(false);
      })
  };

  const handleSignup = (data) => {
    setIsLoadingSignup(true);
    mainApi.register(data)
      .then((res) => {
        setRegistrationResStatus(res.status);
        handleSignin({
          email: data.email,
          password: data.password
        },);
      })
      .catch((err) => {
        setRegistrationResStatus(err);
      })
      .finally(() => {
        setIsLoadingSignup(false);
      })
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
  };

  const handleUpdateCurrenUser = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoadingUpdateCurrentUser(true);
      mainApi.updateCurrentUserProfile(data, token)
        .then((res) => {
          setCurrentUserData(res.data);
          setUpdateCurrentUserResStatus(res.status);
          saveCurrentUserDataToLocalStorage(res.data);
        })
        .catch((err) => {
          setUpdateCurrentUserResStatus(err);
        })
        .finally(() => {
          setIsLoadingUpdateCurrentUser(false);
        })
      };
    };

    const getSavedMoviesIds = () => {
      const savedMoviesIds = [];

      savedMoviesData.forEach((savedMovie) => {
        savedMoviesIds.push(savedMovie.movieId);
      });

      return savedMoviesIds;
    };

    const markAsSaved = (foundMoviesArr) => {
      const savedMoviesIdsArr = getSavedMoviesIds();
      foundMoviesArr.forEach((foundMovie) => {
        foundMovie.saved = savedMoviesIdsArr.some((savedMovieId) => savedMovieId === foundMovie.id);
      })

      savedMoviesData.forEach((savedMovie) => {
        foundMoviesArr.forEach((foundMovie) => {
          if (foundMovie.id === savedMovie.movieId) {
            foundMovie._id = savedMovie._id;
          }
        })
      })

      return foundMoviesArr;
    }

    const handleSearchMoviesData = (searchQuery) => {
      setIsLoadingMoviesData(true);
      moviesApi.getMoviesData()
        .then((res) => {
          setMoviesApiResStatus(res.status);
          const foundMoviesArr = searchFilter(searchQuery, res.data);
          setMoviesData(foundMoviesArr);
        })
        .catch((err) => {
          console.log(err);
          setMoviesApiResStatus(err)
        })
        .finally(() => {
          setIsLoadingMoviesData(false);
        })
    };

    const handleSaveFavouriteMovie = (data) => {
      const token = localStorage.getItem('jwt');
      if (token) {
        mainApi.saveMovie(data, token)
          .then((res) => {
            setSaveFavouriteMovieResStatus(res.status);
          })
          .catch((err) => {
            setSaveFavouriteMovieResStatus(err);
            console.log(err);
          })
          .finally(() => {
            handleGetSavedMovies();
          })
      } else {
        history.push('/signin');
      };
    };

    const handleGetSavedMovies = () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        mainApi.getSavedMovies(token)
          .then((res) => {
            setSavedMoviesData(res.data.reverse());
            setGetSavedMoviesResStatus(res.status);
          })
          .catch((err) => {
            setGetSavedMoviesResStatus(err);
            console.log(err);
          })
      };
    };

    const markAsUnsaved = (id) => {
      moviesData.forEach((movie) => {
        if (movie.saved) {
          if (movie._id === id) {
            movie.saved = false;
            movie._id = null;
          }
        }
      })
    }

    const handleDeleteSavedMovie = (id) => {
      const token = localStorage.getItem('jwt');

      if (token) {
        mainApi.deleteSavedMovie(id, token)
          .then((res) => {
            setDeleteSavedMovieResStatus(res.status);
            markAsUnsaved(id);
          })
          .catch((err) => {
            setDeleteSavedMovieResStatus(err);
            console.log(err);
          })
          .finally(() => {
            handleGetSavedMovies();
          })
      };
  }

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const exclusionRoutesPathsArray = [

    '/signin',
    '/signup',
  ];

  const exclusionRoutesPathsArrayFooter = [
    '/signin',
    '/signup',
    '/profile',
  ];

  React.useEffect(() => {
    handleGetSavedMovies();
  }, [])

  React.useEffect(() => {

    const handleWindowLoad = () => {
      setIsLoadingData(false);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [])

  return (
<CurrentUserContext.Provider value={currentUserData}>
      <div className="app">
        {useRouteMatch(exclusionRoutesPathsArray) ? null : (
          <Header
            loggedIn={loggedIn}
            onOpenMenu={setOpenMenu}
          />
        )}
        <Switch>
          <Route
            exact
            path="/"
          >
            {isLoadingData ? (
              <Preloader />
            ) : (
              <Main />
            )}

          </Route>
          <ProtectedRoute
            path="/movies"
            redirectTo="/"
            loggedIn={loggedIn}
            component={Movies}
            isLoadingData={isLoadingMoviesData}
            moviesData={moviesData}
            resStatus={moviesApiResStatus}
            onSubmit={handleSearchMoviesData}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            moviesData={markAsSaved(moviesData)}
            onSaveMovie={handleSaveFavouriteMovie}
            onDeleteSavedMovie={handleDeleteSavedMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            redirectTo="/"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMoviesData={savedMoviesData}
            onDeleteSavedMovie={handleDeleteSavedMovie}
          />
          <ProtectedRoute
            path="/profile"
            redirectTo="/"
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onUpdateCurrentUser={handleUpdateCurrenUser}
            isLoadingUpdateCurrentUser={isLoadingUpdateCurrentUser}
            updUserResStatus={updateCurrentUserResStatus}
            component={Profile}
          />
          <Route
            path="/signup"
          >
            <Register
              onSignup={handleSignup}
              regResStatus={registrationResStatus}
              authResStatus={authResStatus}
              isLoadingSignup={isLoadingSignup || isLoadingData || isLoadingSignin}
            />
          </Route>
          <Route
            path="/signin"
          >
            <Login
              onSignin={handleSignin}
              authResStatus={authResStatus}
              tokenResStatus={tokenAuthResStatus}
              isLoadingSignin={isLoadingSignup || isLoadingData || isLoadingSignin}
            />
          </Route>
          <Route
            path="*"
          >
            <NotFound />
          </Route>
        </Switch>
        {useRouteMatch(exclusionRoutesPathsArrayFooter) ? null : (
          <Footer />
        )}
        {menuIsOpen && (
          <Modal
            modalIsOpen={menuIsOpen}
            onModalClose={setCloseMenu}
          >
            <Modal.Header />
            <Modal.Body>
              <MobileNavigation
                onModalClose={setCloseMenu}
              />
            </Modal.Body>
            <Modal.Footer>
              <MobileAccountLink
                onModalClose={setCloseMenu}
              />
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
