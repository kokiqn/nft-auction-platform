import React from 'react'
import { Chip } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import styles from './ProductInfoStatus.module.scss'

export default function ProductInfoStatus() {
  return (
    <div className={styles["product-info-status"]}>
      <Chip
        className={styles.status}
        icon={<FiberManualRecordIcon fontSize="small" sx={{ paddingRight: "3px" }} />}
        label="LIVE"
        variant="filled"
        color="secondary"
      />
    </div>
  )
}
