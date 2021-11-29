import Link from "../link/Link"

function Logo ({ type = "default" }) {
  const defaultLogo = '/images/logo.svg';
  const mutedLogo = '/images/logo-muted.svg'

  return (
    <>
      <Link href="/"><img src={type == 'muted' ? mutedLogo : defaultLogo} alt="logo" /></Link>
    </>
  )
}

export default Logo;
