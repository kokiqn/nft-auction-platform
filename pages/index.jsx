import { useEffect, useState } from "react"

import Header from "../src/components/header/Header"
import Featured from "../src/components/featured/Featured"
import Trending from "../src/components/trending/Trending"
import TopCollectors from "../src/components/collectors/TopCollectors"
import How from "../src/components/how/How"
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer"

import dataNfts from "../public/data/nfts.json"

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);

  useEffect(async () => {
    const dataFeatured = await fetch(process.env.apiUrl + '/featured')
    .then((res) => res.json());

    dataFeatured.nfts[0]["cols"] = 3;
    dataFeatured.nfts[0]["rows"] = 2;
    dataFeatured.nfts.map((obj, i) => obj["href"] = "/product/" + dataFeatured?.nfts[i]?.id);

    setFeaturedCards(dataFeatured);
  }, [])

  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);

  useEffect(async () => {
    const dataTrending = await fetch(process.env.apiUrl + '/trending')
    .then((res) => res.json());

    setTrendingItems(dataTrending?.nfts)
    setTrendingFilters(dataTrending?.filters?.sort)
  }, [])
  

  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);

  useEffect(async () => {
    const dataCollectors = await fetch(process.env.apiUrl + '/top-collectors')
    .then((res) => res.json());

    dataCollectors?.users.sort(function (a, b) {
      return b.nfts.length - a.nfts.length;
    })

    setCollectors(dataCollectors?.users?.slice(0, 12));
    setCollectorFilters(dataCollectors?.filters?.sort);
  })

  const [nfts, setNfts] = useState([]);
  useEffect(() => {

    dataNfts.map(nft => nft["timeLeft"] = Math.random() * 10000)
    setNfts(dataNfts);
  }, [])

  return (
    <>
      <Header />
      <Featured items={featuredCards?.nfts} />
      <Trending cards={trendingItems} filters={trendingFilters} />
      <TopCollectors collectors={collectors} filters={collectorFilters}/>
      <How
        title="HOW IT WORKS"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, repellat possimus hic nulla aliquam.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum, repellat possimus hic nulla aliquam."
      />
      <Auctions cards={nfts} />
      <Footer />
    </>
  )
}
