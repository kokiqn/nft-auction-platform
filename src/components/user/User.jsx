import React from 'react'
import Avatar from '../avatar/Avatar'

import styles from './User.module.scss';

export default function User({ name = '', info = '', avatar = '', size = 55, verified = false}) {
  return (
    <div className={styles.user} style={{ height: 55 }}>
      <Avatar url='/images/avatar.png' size={size} verified/>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  )
}
