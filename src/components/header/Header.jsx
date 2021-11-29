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
        <Grid container alignItems="center" spacing={{xs: 1}}>
          <Grid item md={2}><Logo/></Grid>
          <Grid item xs={7} sm={3} md={5}>
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
          <Grid item xs={12} sm={6} md={5} className={styles['button-wrapper']}> 
            <Link href="/"><Button size="small" className={styles.button}>Home</Button></Link>
            <Link href="/activity"><Button className={styles.button} size="small">Activity</Button></Link>
            <Link href="/explore"><Button className={styles.buttonLast} size="large">Explore</Button></Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
