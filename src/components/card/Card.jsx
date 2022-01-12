import { useState } from 'react';
import millify from 'millify';
import Countdown from 'react-countdown';

import Avatar from '../avatar/Avatar';
import { Card as CardContainer, CardMedia, CardHeader, CardActions, CardContent, Chip, Button, CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import styles from './Card.module.scss';
import Link from '../link/Link'

export default function Card({
  name,
  mediaUrl,
  user = {
    avatarUrl: '/images/avatar.png',
    verified: false,
    profile,
  },
  price,
  currency,
  likes = 0,
  timeLeft,
  id,
}) {
  const [live, setLive] = useState(false);
  const [time, setTime] = useState(timeLeft);

  const LiveCard = () => {

    return <CardActionArea>
      <div className={styles.badge}>
        <Button size="small">
          <FiberManualRecordIcon fontSize="small" sx={{ paddingRight: "5px" }} />
          LIVE
        </Button>
      </div>
      <CardMedia
        className={styles.media}
        component="img"
        image={mediaUrl}
      />
      <Countdown
        className={styles.countdown}
        date={Date.now() + time}
        onComplete={() => reset()} />
    </CardActionArea>
  };
  const reset = () => {
    setTime(undefined);
    setLive(false);
  }

  const RegularCard = () => {
    return <CardMedia
      className={styles.media}
      component="img"
      image={mediaUrl}
    />
  };

  const UpdateCard = () => {
    if (time != undefined) {
      setLive(true)
    }

    if (live) {
      return <LiveCard />
    }
    return <RegularCard />
  }


  function format(num) {
    return millify(num, {
      units: ['', 'k', 'M', 'B'],
      precision: 2
    });
  }

  return (
    <div>
      <Link href={`/product/` + id}>
        <CardContainer className={`${styles.card} ${live ? styles.live : ''}`}>
          <CardHeader
            className={styles.header}
            avatar={<Avatar url={user.avatarUrl} verified={user.verified} size="30px" id={user.profile}/>}
          />
          <div className={styles.mediaDiv}>
            <UpdateCard />
          </div>
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
      </Link>
    </div>
  )
}
