import { Container, ImageList, ImageListItem } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react';

import styles from './Featured.module.scss'

export default function Featured({ items = [] }) {
  const router = useRouter()

  return (
    <Container disableGutters className={styles.container} maxWidth="xl">
      <ImageList
        sx={{ width: "max", height: "max", padding: 1 }}
        variant="quilted"
        cols={6}
        rowHeight={230}
        gap={20}
      >
        {items.map((item) => (
          <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              onClick={() => router.push(item.href)}
              className={styles.item}
              src={item.source.url}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
