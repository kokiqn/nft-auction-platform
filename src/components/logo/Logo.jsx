import React from 'react';


function Logo ({ type }) {
  const defaultLogo = '/images/logo.svg';
  const mutedLogo = '/images/logo-muted.svg'

  return (
    <div>
      <img src={type == 'muted' ? mutedLogo : defaultLogo} alt="logo" />
    </div>
  )
}

Logo.defaultProps = {
  type: 'default'
}

export default Logo;
