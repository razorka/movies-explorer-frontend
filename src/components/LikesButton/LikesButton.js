import React from 'react';

import { ReactComponent as AddLikesButtonIcon } from '../../images/add-like-button-icon.svg';
import { ReactComponent as AddLikesButtonIconMarked } from '../../images/add-like-button-icon-active.svg';
import { ReactComponent as RemoveLikesButtonIcon } from '../../images/remove-like-button-icon.svg';

function LikesButton({
  className,
  ariaLabel,
  onClick,
  locationPathname,
  isMarked,
}) {
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {locationPathname === '/saved-movies' ? (
        <RemoveLikesButtonIcon />
      )
      :
      locationPathname === '/movies' && isMarked ? (
        <AddLikesButtonIconMarked />
      ) : (
        <AddLikesButtonIcon />
      )}
    </button>
  )
}

export default LikesButton;
