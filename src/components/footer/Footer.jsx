import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            <Logo type="muted" />
          </Grid>
          <Grid item>
            <p>Bum All Rights Reserved 2021</p>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              variant="text"
              className={styles.button}
            >Privacy Policy</Button>
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
