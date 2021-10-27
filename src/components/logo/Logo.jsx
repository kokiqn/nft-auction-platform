import React from 'react';


const Logo = ({type}) => {
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
