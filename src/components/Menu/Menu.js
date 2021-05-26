import React from 'react';
import Modal from '../Modal/Modal';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import MobileAccountLink from '../MobileAccountLink/MobileAccountLink';


function Menu({
  isOpen,
  onClose,
}) {

  const STYLE_SETTINGS = {
    overlay: 'menu-modal',
    container: 'menu-modal__container',
    content: 'menu-modal__content',
    header: 'menu-modal__header',
    closeButton: 'menu-modal__close-button',
    main: 'menu-modal__main',
    footer: 'menu-modal__footer',
  };

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    styleSettings={STYLE_SETTINGS}
  >
    <Modal.Header />
    <Modal.Body>
      <MobileNavigation
        onClose={onClose}
      />
    </Modal.Body>
    <Modal.Footer>
      <MobileAccountLink
        onClose={onClose}
      />
    </Modal.Footer>
  </Modal>
  )
}

export default Menu;
