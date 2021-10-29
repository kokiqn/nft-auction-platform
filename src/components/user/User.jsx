import React from 'react'
import Avatar from '../avatar/Avatar'

import styles from './User.module.scss';

function User({ name, info, avatar, size, verified }) {
  return (
    <div className={styles.user} style={{ height: 55 }}>
      <Avatar url='/images/avatar.png' size={size} veri/>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  )
}

User.defaultProps = {
  name: '',
  info: '',
  avatar: '',
  size: 55,
  verified: false
}

export default User
