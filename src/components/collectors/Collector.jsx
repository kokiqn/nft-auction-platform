import User from '../user/User'
import styles from './Collector.module.scss'

export default function Collector({ name, nftsCount, avatar, verified, id, type, profile }) {
  return (
    <div className={`${styles.container} ${type === "light" && styles.light}`}>
      <div className={styles.index}>
        <h1>{id}</h1>
      </div>
      <div className={styles.user}>
        <User
          name={name}
          info={nftsCount + " items"}
          avatar={avatar}
          verified={verified}
          profile={profile}
        />
      </div>
    </div>
  )
}
