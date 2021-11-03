import React from 'react';

function Logo ({ type = "default" }) {
  const defaultLogo = '/images/logo.svg';
  const mutedLogo = '/images/logo-muted.svg'

  return (
    <>
      <img src={type == 'muted' ? mutedLogo : defaultLogo} alt="logo" />
    </>
  )
}

export default Logo;
