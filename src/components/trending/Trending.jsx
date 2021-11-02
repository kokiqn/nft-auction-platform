import { useState } from 'react'
import Card from '../card/Card'
import { Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import styles from './Trending.module.scss'

export default function Trending({ cards = [] }) {
  const [value, setValue] = useState(7);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1 style={{ fontFamily: "Gill Sans MT" }}>Trending</h1>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              sx={{ fontFamily: "Gill Sans MT", color: "#e1e1fc" }}
              id="demo-simple-select"
              labelId="demo-simple-select-label"
              label="Select"
              value={value}
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={1}>Today</MenuItem>
              <MenuItem value={7}>This week</MenuItem>
              <MenuItem value={30}>This month</MenuItem>
              <MenuItem value={365}>This year</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={1} justifyContent="center">
          {cards.map((card, key) => {
            return (
              <Grid key={key} item xs={12} sm={3}>
                <Card
                  {...card}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
