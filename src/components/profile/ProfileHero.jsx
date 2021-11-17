import React from 'react'

import styles from './ProfileHero.module.scss'

export default function ProfileHero({ image }) {
  return (
    <div className={styles['profile-hero']}>
      <img className={styles.image} src={image}/>
    </div>
  )
}
