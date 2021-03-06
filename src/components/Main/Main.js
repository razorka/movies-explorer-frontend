import React from 'react';

import Promo from '../Promo/Promo';

import NavTab from '../NavTab/NavTab';

import AboutProject from '../AboutProject/AboutProject';

import AboutMe from '../AboutMe/AboutMe';

import Techs from '../Techs/Techs';

function Main() {
  return (
    <main
      className="main"
    >
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  )
}

export default Main;
