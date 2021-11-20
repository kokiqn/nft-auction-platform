import { Typography } from '@mui/material'
import styles from './ExploreTitle.module.scss'

export default function ExploreTitle({ text = 'Explore' }) {
  return (
    <div className={styles['explore-title']}>
      <Typography variant="h1">{text}</Typography>
    </div>
  )
}
