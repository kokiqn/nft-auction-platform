import React from 'react'
import Countdown from 'react-countdown'

import styles from "./ProductInfoTimer.module.scss"

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const TimerContainer = () => {
    return (
      <div className={styles.timer}>
        <p className={styles.title}>ENDS IN</p>
        <Countdown
          className={styles.countdown}
          date={Date.parse(timeEnd)}
          daysInHours
          onComplete={onTimeEnd}
        />
      </div>
    )
  }

  const EmptyContainer = () => {
    return (
      <div className={styles.empty}/>
    )
  }

  return (
    <div className={styles["product-info-timer"]}>
      {timeEnd != null ? <TimerContainer/> : <EmptyContainer/>}
    </div>
  )
}
