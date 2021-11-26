import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Card from "../../src/components/card/Card"

import { Grid, Container } from "@mui/material"

import { useState, useEffect } from "react";

export default function index() {
  const [nfts, setNfts] = useState([])
  const [nftFilters, setNftFilters] = useState([])
  const [valueSort, setValueSort] = useState('')
  const [valuePrice, setValuePrice] = useState('')

  const handleChangeSort = ((e) => setValueSort(e.target.value))
  const handleChangePrice = ((e) => setValuePrice(e.target.value))

  useEffect(async () => {
    const dataNft = await fetch(process.env.apiUrl + '/explore' + '?' +
      (valueSort != "" ? `sort=${valueSort}` : '') + '&' + (valuePrice != "" ? `price=${valuePrice}` : ''))
      .then((res) => res.json())

    setNfts(dataNft?.nfts)
    setNftFilters([dataNft?.filters?.sort, dataNft?.filters?.price])
  }, [valueSort, valuePrice])

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container alignItems='center' paddingTop={5.375}>
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={9}>
            <ExploreFilters
              filters={nftFilters}
              onChangeSort={handleChangeSort}
              onChangePrice={handleChangePrice}
              valueSort={valueSort}
              valuePrice={valuePrice}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} paddingTop={3.265}>
          {nfts?.map((item, i) => {
            return (
              <Grid key={i} item>
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
