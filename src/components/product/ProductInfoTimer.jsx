import React from 'react'
import Countdown from 'react-countdown'

import styles from "./ProductInfoTimer.module.scss"

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const TimerContainer = () => {
    return (
      <>
        <Countdown
          className={styles.countdown}
          date={Date.parse(timeEnd)}
          daysInHours
          onComplete={onTimeEnd}
        />
      </>
    )
  }

  return (
    <div className={`${styles["product-info-timer"]} ${timeEnd && styles.active}`}>
      <p className={styles.title}>ENDS IN</p>
      <div className={styles.timer}>
        {timeEnd && <TimerContainer />}
      </div>
    </div>
  )
}
