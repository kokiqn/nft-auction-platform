import styles from "./ActivityListItem.module.scss"
import { formatDistance, parseISO } from "date-fns"
import Avatar from '../avatar/Avatar'
import { Link as LinkStyle } from "@mui/material"
import Link from 'next/link'

export default function ActivityListItem({ user, created_at, nft, type = 'like' }) {
  return (
    <div className={styles['activity-item']}>
      <Avatar size={screen.width < 1024 ? 45 : 60} url={user?.avatar?.url} verified={user?.verified} id={user.id} />
      <div className={styles.paragraphs}>
        <p>
          <Link href={'/profile/' + user.id}>
            <strong>{user?.username}</strong>
          </Link>
          {type === 'like' ? ' liked ' : ' bought '}
          <Link href={"/product/" + nft.id}>
            <LinkStyle color="secondary">"{nft?.name}" </LinkStyle>
          </Link>
          by
          <Link href={'/profile/' + nft?.owner?.id}>
            <LinkStyle color="secondary"> {nft?.owner?.username}</LinkStyle>
          </Link>
        </p>
        <p className={styles.small}>{created_at ? `${formatDistance(parseISO(created_at), new Date())} ago` : ''}</p>
      </div>
    </div>
  )
}
