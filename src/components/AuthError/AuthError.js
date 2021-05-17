import React from 'react';

function AuthError({ errorText }) {

  const AUTH_ERROR_STYLES = {
    text: 'auth-error',
  };

  return (
    <span
      className={AUTH_ERROR_STYLES.text}
    >
      {errorText}
    </span>
  )
}

export default AuthError;
