import { Button, Container, Grid } from '@mui/material'
import Step from './Step'

import styles from './How.module.scss'

export default function How({ description, title, items = [...itemData], link }) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
        <Grid container spacing={3} className={styles['text-container']}>
          <Grid item>
            <h1>{title}</h1>
          </Grid>
          <Grid item>
            <p>{description}</p>
          </Grid>
          <Grid item>
            <Button variant="contained">
              <a href={link}>Learn More</a>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={styles.steps} direction="column">
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

let itemData = [
  {
    number: Number,
    title: "What is NFT BUM?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, repellat possimus hic nulla aliquam.",
  },
  {
    number: Number,
    title: "What is NFT BUM?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, repellat possimus hic nulla aliquam.",
  },
  {
    number: Number,
    title: "What is NFT BUM?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, repellat possimus hic nulla aliquam.",
  }
]
