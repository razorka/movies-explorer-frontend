import React from 'react';

import { ReactComponent as AddLikesButtonIcon } from '../../images/add-favorites-button-icon.svg';
import { ReactComponent as AddLikesButtonIconMarked } from '../../images/add-favorites-button-icon-marked.svg';
import { ReactComponent as RemoveLikesButtonIcon } from '../../images/remove-favorites-button-icon.svg';

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
