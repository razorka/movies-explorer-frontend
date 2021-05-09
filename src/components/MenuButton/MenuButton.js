import React from 'react';

const MENU_BUTTON_LABEL = 'открыть меню';

const MenuButton = React.memo((props) => {
  return (
    <button
      title={MENU_BUTTON_LABEL}
      className="menu-button"
      onClick={props.onOpenMenu}
    />
  )
});

export default MenuButton;
