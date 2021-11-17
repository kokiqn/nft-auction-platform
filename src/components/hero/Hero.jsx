import { Typography } from '@mui/material'
import React from 'react'
import styles from './Hero.module.scss'

export default function Hero({ text }) {
  return (
    <div className={styles.hero}>
      <Typography className={styles.text} variant="h1">HOW IT WORKS</Typography>
    </div>
  )
}
