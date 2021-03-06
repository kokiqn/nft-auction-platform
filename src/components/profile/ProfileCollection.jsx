import { Container, Grid, Typography } from '@mui/material'
import styles from './ProfileCollection.module.scss'
import ProfileCollectionFilters from "../profile/ProfileCollectionFilters"
import Card from "../card/Card"

export default function ProfileCollection({ user, filters, items, functions }) {
  return (
    <div className={styles['profile-collection']}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={10} md={3}>
            <Typography variant="h3" fontSize={48}>Collection</Typography>
          </Grid>
          <Grid item xs={10} md={9}>
            <ProfileCollectionFilters 
            filters={filters}
            onChangeSort={functions[0]}
            onChangePrice={functions[1]}
            valueSort={functions[2]}
            valuePrice={functions[3]}
            />
          </Grid>
        </Grid>
        <Grid container paddingTop={3.5} spacing={2} justifyContent="center">
          {items?.map((card, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} lg={3}>
                <Card
                  {...card}
                  id={card.id}
                  mediaUrl={card.source.url}
                  user={user}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
