import Link from "../link/Link"
import styles from './Logo.module.scss'

function Logo ({ type = "default" }) {
  const defaultLogo = '/images/logo.svg';
  const mutedLogo = '/images/logo-muted.svg'

  return (
    <>
      <Link href="/"><img className={styles.logo} src={type == 'muted' ? mutedLogo : defaultLogo} alt="logo" /></Link>
    </>
  )
}

export default Logo;
