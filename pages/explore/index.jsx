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

  const dateAscending = ((a, b) => a?.created_at?.localeCompare(b?.created_at))
  const dateDescending = ((a, b) => b?.created_at?.localeCompare(a?.created_at))

  const nameAscending = ((a, b) => a?.name?.localeCompare(b?.name))
  const nameDescending = ((a, b) => b?.name?.localeCompare(a?.name))

  const priceAscending = ((a, b) => a?.price - b?.price)
  const priceDescending = ((a, b) => b?.price - a?.price)

  const priceFilterLeast = (item => item?.price <= 0.1)
  const priceFilterMiddle = (item => item?.price <= 0.4)
  const priceFilterMost = (item => item?.price <= 0.7)

  const functionArr = [dateAscending, dateDescending, nameAscending, nameDescending,
     priceAscending, priceDescending, priceFilterLeast, priceFilterMiddle, priceFilterMost]

  useEffect(async () => {
    const dataNft = await fetch(process.env.apiUrl + '/' + 'explore')
      .then((res) => res.json())

    let filtered
    for (let i = 0; i < functionArr.length; i++) {
      if (valuePrice == i + 1) filtered = dataNft?.nfts?.filter(functionArr[i])
      if (valueSort == i + 1) dataNft?.nfts.sort(functionArr[i])
    }

    setNfts(valuePrice == "" ? dataNft?.nfts : filtered)
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
