import React from 'react'
import Avatar from '../avatar/Avatar';
import { Card as CardContainer, CardMedia, CardHeader, CardActions, CardContent, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './Card.module.scss';
import millify from 'millify';

function format(num) {
  return millify(num, {
    precision: 1,
    lowercase: true
  });
}

function Card({ defaults }) {
  return (
    <div>
      <CardContainer className={styles.card}>
        <CardHeader
          className={styles.header}
          avatar={<Avatar url={defaults.user.avatarUrl}
            verified={defaults.user.verified}
            size="30px"
          />}
        />
        <CardMedia
          className={styles.media}
          component="img"
          image={defaults.mediaUrl}
        />
        <CardActions className={styles.bottom}>
          <CardContent sx={{ padding: 0 }}>
            <p className={styles.title}>{defaults.title}</p>
            <p className={styles.price}>{defaults.price} {defaults.currency}</p>
          </CardContent>
          <Chip
            className={styles.likes}
            label={format(23990)}
            variant="outlined"
            icon={<FavoriteIcon fontSize="30" sx={{ color: "#24f25e !important" }} />}
          />
        </CardActions>
      </CardContainer>
    </div>
  )
}

export default Card;
