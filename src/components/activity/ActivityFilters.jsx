import { useState } from 'react';
import data from '../../../public/data/filtersActivity.json'
import styles from './ActivityFilters.module.scss'
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({ filters }) {
  const [input, setInput] = useState('');
  const [valueSort, setValueSort] = useState('');
  const [valueType, setvalueType] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSort(e) {
    setValueSort(e.target.value);
  };

  function handlePrice(e) {
    setvalueType(e.target.value);
  };

  return (
    <div className={styles['activity-filters']}>
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
            onChange={handleSort}>
            {filters?.sort?.map((item, i) => {
              return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="price-select" shrink={false}>{valueType == '' && 'Type'}</InputLabel>
          <Select
            className={styles.select}
            labelId="price-select"
            id="demo-simple-select"
            variant="outlined"
            color="primary"
            value={valueType}
            onChange={handlePrice}>
            {filters?.type?.map((item, i) => {
              return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl size="medium">
          <TextField
            onChange={handleChange}
            sx={{ minWidth: 340 ,background: "#181828", padding: "0.7rem 1.2rem", borderRadius: "30px" }}
            id="input-with-icon-textfield"
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
