import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';

import Main from '../Main/Main';

import Modal from '../Modal/Modal';

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

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onSignup={handleSignup}
        onSignin={handleSignin}
        onOpenMenu={setOpenMenu}
      />
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
          <h1>Фильмы</h1>
        </Route>
        <Route
          path="/saved-movies"
        >
          <h1>Сохраненные фильмы</h1>
        </Route>
        <Route
          path="/profile"
        >
          <h1>Профиль</h1>
        </Route>
        <Route
          path="/signup"
        >
          <h1>Регистрация</h1>
        </Route>
        <Route
          path="/signin"
        >
          <h1>Авторизация</h1>
        </Route>
      </Switch>
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
