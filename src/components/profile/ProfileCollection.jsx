import { Container, Grid, Typography } from '@mui/material'
import styles from './ProfileCollection.module.scss'
import ProfileCollectionFilters from "../profile/ProfileCollectionFilters"
import Card from "../card/Card"

export default function ProfileCollection({ user, filters, items, functions }) {
  return (
    <div className={styles['profile-collection']}>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h3" fontSize={48}>Collection</Typography>
          </Grid>
          <Grid item xs={9} >
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
              <Grid key={i} item xs={3}>
                <Card
                  user={user}
                  mediaUrl={card?.source?.formats?.thumbnail?.url} {...card}
                />
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
