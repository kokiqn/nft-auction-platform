import { useState } from 'react'
import Card from '../card/Card'
import { Grid, Container, Select, MenuItem, FormControl } from '@mui/material';

import styles from './Trending.module.scss'

export default function Trending({ cards = [], filters = [] }) {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1 style={{ fontFamily: "Gill Sans MT" }}>Trending</h1>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              sx={{ fontFamily: "Gill Sans MT", color: "#e1e1fc", fill: "#e1e1fc" }}
              id="demo-simple-select"
              value={value}
              onChange={handleChange}
              autoWidth
            >
              {filters.map(filter => {
                return (
                  <MenuItem value={filter.value}>{filter.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={1} justifyContent="center">
          {cards.map((card, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} lg={3}>
                <Card
                  {...card}
                  mediaUrl={card.source.url}
                  user={{avatarUrl: card.owner.avatar.url, verified: card.owner.verified}}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
