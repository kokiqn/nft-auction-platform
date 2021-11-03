import { useState } from 'react'
import Card from '../card/Card'
import { Grid, Container, Select, MenuItem, FormControl } from '@mui/material';

import styles from './Auctions.module.scss'

export default function Auctions({ cards = [] }) {
  const [value, setValue] = useState(7);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1 style={{ fontFamily: "Gill Sans MT" }}>🔥 Live Auctions</h1>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              sx={{ fontFamily: "Gill Sans MT", color: "#e1e1fc", fill: "#e1e1fc" }}
              id="demo-simple-select"
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
                <Card className={styles.item}
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
