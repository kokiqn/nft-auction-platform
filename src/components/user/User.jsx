import React from 'react'
import Avatar from '../avatar/Avatar'
import Link from 'next/link'
import styles from './User.module.scss';

export default function User({ name = '', info = '', avatar = '', size = 55, verified = false, profile }) {
  return (
    <Link href={'/profile/' + profile}>
      <div className={styles.user}>
        <Avatar url={avatar} size={size} verified={verified} id={profile} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.info}>{info}</p>
        </div>
      </div>
    </Link>
  )
}
