import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab, TableBody, TableCell, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react';

import User from '../user/User'

import styles from './ProductTabs.module.scss'

export default function ProductTabs({ text, bids = [...list] }) {
  const [value, setValue] = useState('details');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles["product-tabs"]}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
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
          <TabPanel value="details">Details</TabPanel>
          <TabPanel value="bids">
            <TableBody>
              {bids.map((bid, i) => {
                return (
                  <TableRow className={styles[`table-row-${i}`]}>
                    <TableCell><User {...bid.user} /></TableCell>
                    <TableCell>{bid.price}</TableCell>
                    <TableCell>{bid.time}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </TabPanel>
        </TabContext>
      </Box>
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
    time: "17 seconds ago",
  },
  {
    user: {
      name: "patrick",
      avatar: "/images/avatar.png",
    },
    price: "12 ETH",
    time: "17 seconds ago",
  },
  {
    user: {
      name: "patrick",
      avatar: "/images/avatar.png",
    },
    price: "12 ETH",
    time: "17 seconds ago",
  },
]
