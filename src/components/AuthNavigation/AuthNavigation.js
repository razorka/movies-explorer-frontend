import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo(() => {
  return (
    <nav
      className="auth-navigation"
    >
      <NavLink
        className="auth-navigation__link"
        to="/signup"
      >
        Регистрация
      </NavLink>
      <NavLink
        className="auth-navigation__link"
        to="/signin"
      >
        Войти
      </NavLink>
    </nav>
  )
});

export default AuthNavigation;
