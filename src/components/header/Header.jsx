import { Container, Grid, TextField, Box, Button } from "@mui/material/";
import Link from "../link/Link";
import classNames from 'classnames'
import styles from './Header.module.scss'

import Logo from "../logo/Logo";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Logo />
        <Box className={styles.box}>
          <SearchIcon sx={{ color: 'smoke', mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Find items, users and activities"
            variant="standard"
            fullWidth />
        </Box>
        <Grid className={classNames(styles.grid)}container justifyContent="space-between" md='4'>
          <Grid item xs={0.6} sm={2} md={4}>
            <Button size="medium">Home</Button>
          </Grid>
          <Grid item xs={0.6} sm={2} md={4}>
            <Button size="medium">Activity</Button>
          </Grid>
          <Grid item xs={0.6} sm={2} md={4}>
            <Button size="medium">Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
