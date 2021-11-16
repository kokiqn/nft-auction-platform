import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductTabs from './ProductTabs'
import ProductActions from './ProductActions'

import styles from './ProductContainer.module.scss'
import { Grid } from '@mui/material'

export default function ProductContainer({
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source,
}) {
  return (
    <div className={styles['product-container']}>
      <Grid container>
        <Grid item xs={6}>
          <ProductImage url={source} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            onTimeEnd
            timeEnd={auction_end}
            isLive
          />
          <ProductTabs text={details} bids={bids} />
          <ProductActions
            isLive={auction_end}
            buyAmount={price}
            bidAmount={price}
            currency={currency} 
            onBid
            onBuy/>
        </Grid>
      </Grid>
    </div>
  )
}
