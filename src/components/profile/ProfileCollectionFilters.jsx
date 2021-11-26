import { useState } from 'react';
import data from '../../../public/data/filtersProfile.json'
import styles from './ProfileCollectionFilters.module.scss'
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function ProfileCollectionFilters({ filters, onChangeSort, onChangePrice, valueSort, valuePrice }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className={styles['profile-collection-filters']}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="sort-select" shrink={false}>{valueSort == '' && 'Sort by'}</InputLabel>
          <Select
            className={styles.select}
            labelId="sort-select"
            id="demo-simple-select"
            variant="outlined"
            color="primary"
            value={valueSort}
            onChange={onChangeSort}>
            {filters[0]?.map((item, i) => {
              return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="price-select" shrink={false}>{valuePrice == '' && 'Price range'}</InputLabel>
          <Select
            className={styles.select}
            labelId="price-select"
            id="demo-simple-select"
            variant="outlined"
            color="primary"
            value={valuePrice}
            onChange={onChangePrice}>
            {filters[1]?.map((item, i) => {
              return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl size="medium">
          <TextField
            onChange={handleChange}
            sx={{ background: "#181828", padding: "0.7rem 1.2rem", borderRadius: "30px" }}
            id="input-with-icon-textfield"
            value={input}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </FormControl>
      </Stack>
    </div>
  )
}
