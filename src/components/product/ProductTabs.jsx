import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import { formatDistance, parseISO } from 'date-fns';
import { useState } from 'react';

import User from '../user/User'

import styles from './ProductTabs.module.scss'

export default function ProductTabs({ text, bids = [] }) {
  const [value, setValue] = useState('details');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab
              className={styles["tab-details"]}
              label="DETAILS"
              value="details"
            />
            <Tab
              className={styles["tab-bids"]}
              label="BIDS"
              value="bids"
            />
          </TabList>
        </Box>
        <TabPanel className={styles.details} value="details">{text}</TabPanel>
        <TabPanel className={styles.bids} value="bids">
          <Table sx={{ minWidth: 650 }}>
            <TableBody>
              {bids.map((bid, i) => {
                return (
                  <TableRow className={styles[`table-row-${i}`]}>
                    <TableCell>
                      <User {...bid.user} />
                    </TableCell>
                    <TableCell className={styles.price}>{bid.price}</TableCell>
                    <TableCell className={styles.time}>
                      {formatDistance(parseISO(bid.date), new Date())}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  )
}

var list = [
  {
    user: {
      name: "patrick",
      avatar: "/images/avatar.png",
    },
    price: "12 ETH",
    date: "2021-10-22T08:29:23.382Z",
  },
]