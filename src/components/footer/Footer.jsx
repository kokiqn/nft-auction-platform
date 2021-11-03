import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} maxWidth="xl">
        <Logo type="muted" />
        <p>Bum All Rights Reserved 2021</p>
        <Grid
          container
          xs={3}
          justifyContent="center">
          <Grid item>
            <Button
              size="medium"
              variant="text"
              className={styles.button}
            >Privacy Policy</Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              variant="text"
              className={styles.button}
            >Cookie Policy</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
