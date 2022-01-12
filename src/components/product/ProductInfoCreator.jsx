import User from "../user/User"

import styles from "./ProductInfoCreator.module.scss"

export default function ProductInfoCreator({ name, avatar, verified = false, profile }) {
  return (
    <div className={styles["product-info-creator"]}>
      <p className={styles.title}>CREATOR</p>
      <div className={styles["user-container"]}>
        <User name={name} avatar={avatar} verified={verified} size="40px" profile={profile}/>
      </div>
    </div>
  )
}
