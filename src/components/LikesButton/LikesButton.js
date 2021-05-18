import React from 'react';

import { ReactComponent as AddLikesButtonIcon } from '../../images/add-like-button-icon.svg';
import { ReactComponent as AddLikesButtonIconMarked } from '../../images/add-like-button-icon-active.svg';
import { ReactComponent as RemoveLikesButtonIcon } from '../../images/remove-like-button-icon.svg';

function LikesButton({
  className,
  onClick,
  locationPathname,
  isSaved,
}) {

  const [buttonLabel, setButtonLabel] = React.useState('');

  const DELETE_LABEL = 'Удалить из избранного';
  const ADD_LEBEL = 'Добавить в избранное';

  React.useEffect(() => {
    if (locationPathname === '/saved-movies') {
      setButtonLabel(DELETE_LABEL);
    } else if (locationPathname === '/movies') {
      setButtonLabel(isSaved ? DELETE_LABEL : ADD_LEBEL)
    }
  }, [isSaved, locationPathname])

  return (
    <button
      className={className}
      aria-label={buttonLabel}
      onClick={onClick}
    >
      {locationPathname === '/saved-movies' ? (
        <RemoveLikesButtonIcon />
      )
      :
      locationPathname === '/movies' && isSaved ? (
        <AddLikesButtonIconMarked />
      ) : (
        <AddLikesButtonIcon />
      )}
    </button>
  )
}

export default LikesButton;
