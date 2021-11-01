import React from 'react'
import Avatar from '../avatar/Avatar';
import { Card as CardContainer, CardMedia, CardHeader, CardActions, CardContent, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './Card.module.scss';
import millify from 'millify';

export default function Card({
  name,
  mediaUrl,
  user = {
    avatarUrl: '/images/avatar.png',
    verified: false
  },
  price,
  currency,
  likes = 0
}) {

  function format(num) {
    return millify(num, {
      units: ['', 'k', 'M', 'B'],
      precision: 2
    });
  }

  return (
    <div>
      <CardContainer className={styles.card}>
        <CardHeader
          className={styles.header}
          avatar={<Avatar
            url={user.avatarUrl}
            verified={user.verified}
            size="30px"
          />}
        />
        <CardMedia
          className={styles.media}
          component="img"
          image={mediaUrl}
        />
        <CardActions className={styles.bottom}>
          <CardContent sx={{ padding: 0 }}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>~{price} {currency}</p>
          </CardContent>
          <Chip
            className={styles.likes}
            label={format(likes)}
            variant="outlined"
            icon={<FavoriteIcon fontSize="30" sx={{ color: "#24f25e !important" }} />}
          />
        </CardActions>
      </CardContainer>
    </div>
  )
}
