import Collector from './Collector'
import styles from './CollectorColumn.module.scss'

export default function CollectorColumn({ items = [] }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <Collector
            {...item}
            type={(index + 1) % 2 === 0 && "light"}>
          </Collector>
        )
      })}
    </div>
  )
}
