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
      <Container className={styles.container} maxWidth="xl" disableGutters>
        <Grid container
        alignItems="center"
        spacing={{xs: 1}}
        >
          <Grid item md={2}>
            <Logo />
          </Grid>
          <Grid item xs={5}>
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
          <Grid item xs={11} sm={4} md={5} className={styles['button-wrapper']}> 
            <Button
              size="small"
              className={styles.button}
            >Home</Button>
            <Button
              className={styles.button}
              size="small"
            >Activity</Button>
            <Button
              className={styles.buttonLast}
              size="large"
            >Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
