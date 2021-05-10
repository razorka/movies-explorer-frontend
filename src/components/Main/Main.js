import React from 'react';

import Promo from '../Promo/Promo';

import NavTab from '../NavTab/NavTab';

import AboutProject from '../AboutProject/AboutProject';

import AboutMe from '../AboutMe/AboutMe';

import Techs from '../Techs/Techs';

import Footer from '../Footer/Footer';

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
      <Footer />
    </main>
  )
}

export default Main;
