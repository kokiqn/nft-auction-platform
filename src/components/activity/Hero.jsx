import styles from "./Hero.module.scss"
import { Typography } from "@mui/material"

export default function Hero({ text }) {
  return (
    <div className={styles['activity-hero']}>
      <Typography variant="h1">{text}</Typography>
    </div>
  )
}
