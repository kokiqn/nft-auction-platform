import { Button, Container, Grid } from '@mui/material'
import Step from './Step'

import styles from './How.module.scss'

export default function How({ description, title, items = [], link }) {
  return (
    <div>
      <Container
        className={styles.container}
        maxWidth="xl"
      >
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center">
          <Grid item>
            <h1>{title}</h1>
          </Grid>
          <Grid item>
            <p>{description}</p>
          </Grid>
          <Grid item>
            <Button
              variant="contained">
              <a href={link}>Learn More</a>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className={styles.steps}
          direction="column"
        >
          {items.map((card, key) => {
            return (
              <Grid key={key} item xs={12} sm={3}>
                <Step
                  {...card}
                  number={key + 1}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
