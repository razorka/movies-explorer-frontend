import React from 'react';
import ListLinks from '../FooterListLinks/FooterListLinks';

function FooterList() {

  const FOOTER_LINKS = [
    {
      id: 1,
      text: 'Яндекс.Практикум',
      href: 'https://praktikum.yandex.ru/',
    },
    {
      id: 2,
      text: 'Github',
      href: 'https://github.com/razorka',
    },
    {
      id: 3,
      text: 'Vkontakte',
      href: 'https://vk.com/id9702680',
    },
  ];

  const FOOTER_STYLE_SETTINGS = {
    list: 'footer-list',
    listItem: 'footer-list__item',
    listLink: 'footer-list__link',
  }

  return (
    <ListLinks
      items={FOOTER_LINKS}
      styleSettings={FOOTER_STYLE_SETTINGS}
    />
  )
}

export default FooterList;
