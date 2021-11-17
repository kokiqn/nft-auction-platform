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
  console.log(bids)
  return (
    <div className={styles['product-container']}>
      <Grid container justifyContent="center" gap={9}>
        <Grid item xs={6}>
          <ProductImage url={source?.url} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            onTimeEnd={(() => timeEnd = false)}
            timeEnd={auction_end}
            isLive={auction_end ? true : false}
          />
          <ProductTabs text={details} bids={bids} currency={currency}/>
          <ProductActions
            isLive={auction_end}
            buyAmount={price}
            bidAmount={price}
            currency={currency} 
            onBid={(() => alert(`You have placed a bid on ${name} for ${price} ${currency}!`))}
            onBuy={(() => alert(`You have bought ${name} for ${price} ${currency}!`))}/>
        </Grid>
      </Grid>
    </div>
  )
}
