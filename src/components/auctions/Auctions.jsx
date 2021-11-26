import { useState } from 'react'
import Card from '../card/Card'
import { Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import styles from './Auctions.module.scss'

export default function Auctions({ cards = [], filters, onChange, value }) {
  return (
    <div className={styles.container}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h1 style={{ fontFamily: "Montserrat" }}>🔥 Live Auctions</h1>
          <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="sort-select" shrink={false}>{value == '' && 'Sort by'}</InputLabel>
            <Select
              sx={{ fontFamily: "Montserrat", color: "#e1e1fc", fill: "#e1e1fc" }}
              id="demo-simple-select"
              value={value}
              onChange={onChange}
              autoWidth
            >
              {filters?.map((filter, i) => {
                return (
                  <MenuItem key={i} value={filter.value}>{filter.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={1} justifyContent="center">
          {cards.map((card, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} lg={3}>
                <Card className={styles.item}
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
