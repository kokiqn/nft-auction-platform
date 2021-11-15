import { Button, Grid } from '@mui/material'
import styles from './ProductActions.module.scss'

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={styles['product-actions']}>
      <Grid container >
        <Grid item xs={7}>
          <Button
            className={styles.button}
            onClick={onBuy}
            variant="contained"
            disabled={isLive ? false : true}>
            BUY FOR {buyAmount} {currency}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            className={styles.button}
            onClick={onBid}
            variant="outlined"
            color= "secondary"
            disabled={isLive ? false : true}>
            PLACE BID FOR {bidAmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
