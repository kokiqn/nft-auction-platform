import { Container, Grid, TextField, Box, Button, disableUnderline } from "@mui/material/";
import Link from "../link/Link";
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
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
        <Grid container
        justifyContent="space-between"
        alignItems="center"
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item md={5}>
            <Box className={styles.box}>
              <SearchIcon sx={{ color: 'smoke', mr: 1, my: 0.5, fontSize: 20 }} />
              <TextField
                onChange={handleChange}
                id="standard"
                label="Find items, users and activities"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }} />
            </Box>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              className={styles.button}
            >Home</Button>
            <Button
              className={styles.button}
              size="medium"
            >Activity</Button>
            <Button
              className={styles.buttonLast}
              size="medium"
            >Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
