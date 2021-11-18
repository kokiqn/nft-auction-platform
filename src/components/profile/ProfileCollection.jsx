import { Container, Grid, Typography } from '@mui/material'
import styles from './ProfileCollection.module.scss'
import ProfileCollectionFilters from "../profile/ProfileCollectionFilters"
import Card from "../card/Card"

export default function ProfileCollection({ user, filter, items }) {
  return (
    <div className={styles['profile-collection']}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h3" fontSize={48}>Collection</Typography>
          </Grid>
          <Grid item xs={9} >
            <ProfileCollectionFilters filters={filter} />
          </Grid>
        </Grid>
        <Grid container paddingTop={3.5} spacing={2}>
          {items?.map((card, i) => {
            return (
              <Grid key={i} item xs={3}>
                <Card user={user} {...card} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

const list = [
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
  {
    name: "kdskpok",
    mediaUrl: "/images/nft.jpg",
    user: {
      avatarUrl: '/images/avatar.png',
      verified: false
    },
    price: 5,
    currency: "ETH",
    likes: 2870,
  },
]
