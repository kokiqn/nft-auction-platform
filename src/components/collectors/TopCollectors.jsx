import { Container, FormControl, Grid, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import CollectorColumn from "./CollectorColumn"

import styles from './TopCollectors.module.scss';

var chunk = require('lodash.chunk');

export default function TopCollectors({ items = [] }) {
  const [value, setValue] = useState(7);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  collectors.map((i, k) => i.id = (k + 1));
  
  const split = chunk(items, 3);

  return (
    <Container maxWidth="xl" className={styles.container}>
      <div className={styles.header}>
        <h1 style={{ fontFamily: "Gill Sans MT" }}>Top Collectors</h1>
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
