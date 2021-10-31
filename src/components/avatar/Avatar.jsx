import React from 'react'
import styles from "./Avatar.module.scss"

export default function Avatar({ size = 90, url, verified = false }) {
  const badge = '/images/verified.svg';
  return (
    <div className={styles.avatar} style={{ width: size }}>
      <img className={styles.image} src={url} alt="" />
      {verified && <img className={styles.badge} src={badge} />}
    </div>
  )
}
