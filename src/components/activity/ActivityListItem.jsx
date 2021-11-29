import styles from "./ActivityListItem.module.scss"
import { formatDistance, parseISO } from "date-fns"
import Avatar from '../avatar/Avatar'
import { Link } from "@mui/material"

export default function ActivityListItem({ user, created_at, nft, type = 'like' }) {
  console.log()
  return (
    <div className={styles['activity-item']}>
      <Avatar size={screen.width < 1024 ? 45 : 60} url={user?.avatar?.url} verified={user?.verified} />
      <div className={styles.paragraphs}>
        <p><strong>{user?.username}</strong> {type === 'like' ? 'liked ' : 'bought '}
          <Link color="secondary">"{nft?.name}"</Link> by
          <Link color="secondary"> {nft?.owner?.username}</Link>
        </p>
        <p className={styles.small}>{created_at ? `${formatDistance(parseISO(created_at), new Date())} ago` : ''}</p>
      </div>
    </div>
  )
}

const data = {
  "created_at": "2021-10-22T08:29:23.382Z",
  "user": {
    "avatarUrl": "/images/avatar.png",
    "verified": "true",
    "name": "parjk eo"
  },
  "nft": {
    "name": "String",
    "user": {
      "name": "String",
      "avatarUrl": "String",
      "verified": "Boolean"
    }
  },
  "type": "buy"
}
