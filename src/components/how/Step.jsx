import { Container, Grid } from '@mui/material'
import React from 'react'

import styles from './Step.module.scss'

export default function Step ({ number, title, description }) {
  return (
    <Container className={styles.container}>
      <h1>{number}</h1>
      <Grid container paddingLeft={3}>
        <Grid item>
          <h3>{title}</h3>
        </Grid>
        <Grid item>
          <p>{description}</p>
        </Grid>
      </Grid>
    </Container>
  )
}
