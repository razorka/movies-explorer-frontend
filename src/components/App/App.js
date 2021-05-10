import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from '../Header/Header';

import Modal from '../Modal/Modal';

import Main from '../Main/Main';

import SavedMovies from '../SavedMovies/SavedMovies';

import Movies from '../Movies/Movies';

import Register from '../Register/Register';

import Login from '../Login/Login';

import Footer from '../Footer/Footer';

import MobileNavigation from '../MobileNavigation/MobileNavigation';

import MobileAccountLink from '../MobileAccountLink/MobileAccountLink';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };

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

  return (
    <div className="app">
      {useRouteMatch(exclusionRoutesPathsArray) ? null : (
        <Header
          loggedIn={loggedIn}
          onSignup={handleSignup}
          onSignin={handleSignin}
          onOpenMenu={setOpenMenu}
        />
      )}
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main />
        </Route>
        <Route
          path="/movies"
        >
          <Movies />
        </Route>
        <Route
          path="/saved-movies"
        >
          <SavedMovies />
        </Route>
        <Route
          path="/profile"
        >
          <h1>Профиль</h1>
        </Route>
        <Route
          path="/signup"
        >
          <Register />
        </Route>
        <Route
          path="/signin"
        >
          <Login />
        </Route>
        </Switch>
      {useRouteMatch(exclusionRoutesPathsArray) ? null : (
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
  );
}

export default App;
