import { Typography } from '@mui/material'
import styles from './ExploreTItle.module.scss'

export default function ExploreTItle({ text = 'Explore' }) {
  return (
    <div className={styles['explore-title']}>
      <Typography variant="h1">{text}</Typography>
    </div>
  )
}
