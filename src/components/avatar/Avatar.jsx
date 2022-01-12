import Link from "next/link"
import styles from "./Avatar.module.scss"
import { Avatar as AvatarComponent } from '@mui/material';

export default function Avatar({ size = 90, url, verified = false, id }) {
  const badge = '/images/verified.svg';
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size }}>
      <Link href={'/profile/' + id}><AvatarComponent src={url} sx={{width:size, height: size}}/></Link>
      {verified && <img className={styles.badge} src={badge} />}
    </div>
  )
}

