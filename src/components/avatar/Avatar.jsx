import React from 'react'
import styles from "./Avatar.module.scss"

export default function Avatar({ size, url, verified }) {
  const badge = '/images/verified.svg';
  return (
    <div className={styles.avatar} style={{ width: size }}>
      <img className={styles.image} src={url} alt="" />
      {verified && <img className={styles.badge} src={badge} />}
    </div>
  )
}

Avatar.defaultProps = {
  size: 90,
  verified: false
}