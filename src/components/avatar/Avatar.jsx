import React from 'react'
import styles from "./Avatar.module.scss"
import { Avatar as AvatarComponent } from '@mui/material';

export default function Avatar({ size = 90, url, verified = false }) {
  const badge = '/images/verified.svg';
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size }}>
      <AvatarComponent src={url} sx={{width:size, height: size}}/>
      {verified && <img className={styles.badge} src={badge} />}
    </div>
  )
}

