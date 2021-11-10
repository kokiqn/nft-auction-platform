import React from 'react'
import millify from 'millify'
import { Chip } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'

import styles from './ProductInfoLikes.module.scss'

export default function ProductInfoLikes({ amount = 0 }) {
  function format(num) {
    return millify(num, {
      units: ['', 'k', 'M', 'B'],
      precision: 2
    })};

  return (
    <div className={styles["product-info-likes"]}>
      <Chip
        variant="outlined"
        className={styles.likes}
        icon={<Favorite fontSize="small" sx={{paddingRight: "5px"}}/>} 
        label={format(amount)}
        color="secondary"
        />
    </div>
  )
}
