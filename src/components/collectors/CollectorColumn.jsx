import Collector from './Collector'
import styles from './CollectorColumn.module.scss'

export default function CollectorColumn({ items = [] }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <Collector
            {...item}            
            name={item.username}
            nftsCount={item.nfts.length}
            avatar={item.avatar.url}
            verified={item.verified}
            type={(index + 1) % 2 === 0 && "light"}>
          </Collector>
        )
      })}
    </div>
  )
}
