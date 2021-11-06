import Collector from './Collector'
import styles from './CollectorsColumn.module.scss'

export default function CollectorsColumn({ items = [...itemData] }) {
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
