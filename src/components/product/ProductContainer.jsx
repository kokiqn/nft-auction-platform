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
        <Grid item md={6}>
          <ProductImage url={source}/>
        </Grid>
        <Grid item md={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
          />
          <ProductTabs text={details} bids={bids} />
          <ProductActions currency={currency} />
        </Grid>
      </Grid>
    </div>
  )
}
