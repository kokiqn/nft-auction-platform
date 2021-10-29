import { Container, Grid, TextField, Box, Button, disableUnderline } from "@mui/material/";
import Link from "../link/Link";
import classNames from 'classnames'
import styles from './Header.module.scss'

import Logo from "../logo/Logo";
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';

export default function Header() {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Logo />
        <Box className={styles.box}>
          <SearchIcon sx={{ color: 'smoke', mr: 1, my: 0.5, fontSize: 20 }} />
          <TextField
            onChange={handleChange}
            size="small"
            id="standard"
            label="Find items, users and activities"
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }} />
        </Box>
        <Grid className={classNames(styles.grid)} container justifyContent="space-between">
          <Grid item>
            <Button size="medium">Home</Button>
          </Grid>
          <Grid item>
            <Button size="medium">Activity</Button>
          </Grid>
          <Grid item>
            <Button size="medium">Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
