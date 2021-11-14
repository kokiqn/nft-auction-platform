import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ProductImage from './ProductImage'
import ProductInfoTitle from './ProductInfoTitle'
import ProductInfoPrice from './ProductInfoPrice'
import ProductInfoStatus from './ProductInfoStatus'
import ProductInfoLikes from './ProductInfoLikes'
import ProductInfoCreator from './ProductInfoCreator'
import ProductInfoTimer from './ProductInfoTimer'

import styles from './ProductInfo.module.scss'
import { Grid, Stack } from '@mui/material'
import ProductTabs from './ProductTabs'

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
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <ProductImage url="/images/nft.jpg" />
        <div className={styles.container}>
          <ProductInfoTitle text={title} />
          <span className={styles.accent}/>
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
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <ProductInfoCreator {...creator}/>
            </Grid>
            <Grid item xs={5}>
              <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
            </Grid>
          </Grid>
          <ProductTabs/>
        </div>
      </div>
      <Footer />
    </>
  )
}
