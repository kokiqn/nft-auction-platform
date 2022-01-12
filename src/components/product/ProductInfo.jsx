import React from 'react'
import ProductInfoTitle from './ProductInfoTitle'
import ProductInfoPrice from './ProductInfoPrice'
import ProductInfoStatus from './ProductInfoStatus'
import ProductInfoLikes from './ProductInfoLikes'
import ProductInfoCreator from './ProductInfoCreator'
import ProductInfoTimer from './ProductInfoTimer'

import styles from './ProductInfo.module.scss'
import { Grid, Stack } from '@mui/material'

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  console.log(creator)
  return (
    <div className={styles["product-info"]}>
      <ProductInfoTitle text={title} />
      <span className={styles.accent} />
      <Stack className={styles.stats}
        direction="row"
        alignItems="center"
        justifyContent="space-between">
        <ProductInfoPrice amount={price} currency={currency} />
        <Stack direction="row">
          {isLive && <ProductInfoStatus />}
          <ProductInfoLikes amount={likes} />
        </Stack>
      </Stack>
      <Grid container spacing={{sm: 1}} alignItems="center" justifyContent="center">
        <Grid item xs={10} sm={7}>
          <ProductInfoCreator
          name={creator?.username}
          avatar={creator?.avatar?.url}
          verified={creator?.verified}
          profile={creator?.id}
          />
        </Grid>
        <Grid item xs={10} sm={5}>
          <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
        </Grid>
      </Grid>
    </div>
  )
}
