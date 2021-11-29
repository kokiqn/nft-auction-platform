import styles from './ActivityList.module.scss'
import ActivityListItem from './ActivityListItem'
import { Stack } from '@mui/material'

export default function ActivityList({ items }) {
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
