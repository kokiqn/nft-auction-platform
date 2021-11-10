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

  return (
    <div className={`${styles["product-info-timer"]} ${timeEnd && styles.active}`}>
      {timeEnd && <TimerContainer/>}
    </div>
  )
}
