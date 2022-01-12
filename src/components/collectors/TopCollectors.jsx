import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import CollectorColumn from "./CollectorColumn"

import styles from './TopCollectors.module.scss';

var chunk = require('lodash.chunk');

export default function TopCollectors({ collectors = [], filters, onChange, value }) {
  
  collectors.map((i, k) => i.listId = (k + 1));
  const split = chunk(collectors, 3);

  return (
    <Container maxWidth="xl" disableGutters className={styles.container}>
      <div className={styles.header}>
        <h1 style={{ fontFamily: "Montserrat" }}>Top Collectors</h1>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="sort-select" shrink={false}>{value == '' && 'Sort by'}</InputLabel>
          <Select
            sx={{ fontFamily: "Montserrat", color: "#e1e1fc", fill: "#e1e1fc" }}
            id="demo-simple-select"
            value={value}
            onChange={onChange}
            autoWidth
          >
            {filters.map((filter, i) => {
              return (
                <MenuItem key={i} value={filter.value} >{filter.label}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2} justifyContent="center">
      {split.map((item, index) => {
        return (
          <Grid item key={index}>
            <CollectorColumn items={item} key={index}/>
          </Grid>
        )
      })}
      </Grid>
      
    </Container>
  )
}

let collectors = [
  {
    name: "peter petrov",
    nftsCount: 8921,
    avatar: "String",
    verified: false,
  },
  {
    name: "peter petrov",
    nftsCount: 8921,
    avatar: "String",
    verified: true,
  },
]
