import styles from './ProfileUser.module.scss'
import Avatar from '../avatar/Avatar'
import { Typography } from '@mui/material'

export default function ProfileUser({ name, info, avatar, verified }) {
  return (
    <div className={styles['profile-user']}>
      <Avatar size={192} url={avatar} verified={verified}/>
      <Typography fontWeight={800} fontSize={48} paddingTop={2} variant="h3">{name}</Typography>
      <Typography color="#e1e1fc" paddingTop={2} fontSize={14} variant="body1">{info}</Typography>
    </div>
  )
}
