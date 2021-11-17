import { Typography } from '@mui/material'

import styles from './Description.module.scss'

export default function Description({ text, image }) {
  return (
    <div className={styles.description}>
      <Typography className={styles.text} variant="body1" align="left">{text}</Typography>
      <img className={styles.image} src={image}/>
    </div>
  )
}
