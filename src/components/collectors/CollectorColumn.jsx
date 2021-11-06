import Collector from './Collector'
import styles from './CollectorColumn.module.scss'

export default function CollectorsColumn({ items = [] }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <Collector
            {...item}
            id={index + 1}
            type={(index + 1) % 2 === 0 && "light"}>
          </Collector>
        )
      })}
    </div>
  )
}

const itemData = [
  {
    name: "peter",
    nftsCount: 8921,
    avatar: "String",
    verified: true,
    id: Number,
  },
]
