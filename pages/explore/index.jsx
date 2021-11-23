import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Card from "../../src/components/card/Card"
import nftData from "../../public/data/nfts.json"

import { Grid, Container } from "@mui/material"

import { useState, useEffect } from "react";

export default function index() {
  const [nfts, setNfts] = useState([])
  const [nftFilters, setNftFilters] = useState([])

  useEffect(async () => {
    const dataNft = await fetch(process.env.apiUrl + '/' + 'explore')
    .then((res) => res.json())

    setNfts(dataNft?.nfts)
    setNftFilters(dataNft?.filters)
  }, [])

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container alignItems='center' paddingTop={5.375}>
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={9}>
            <ExploreFilters filters={nftFilters} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} paddingTop={3.265}>
          {nfts?.map((item, i) => {
            return (
              <Grid item>
                <Card
                  {...item}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}
