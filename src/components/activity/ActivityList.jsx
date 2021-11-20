import styles from './ActivityList.module.scss'
import ActivityListItem from './ActivityListItem'
import { Stack } from '@mui/material'

export default function ActivityList({ items }) {
  console.log(items)
  return (
    <div className={styles['activity-list']}>
      <Stack direction="column" spacing={2}>
        {items?.map((item) => {
          return <ActivityListItem {...item} />
        })}
      </Stack>
    </div>
  )
}

const data = [
  {
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
  },  
  {
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
  },
]
