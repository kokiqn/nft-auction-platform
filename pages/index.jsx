import { useEffect, useState } from "react"

import Header from "../src/components/header/Header"
import Featured from "../src/components/featured/Featured"
import Trending from "../src/components/trending/Trending"
import TopCollectors from "../src/components/collectors/TopCollectors"
import How from "../src/components/how/How"
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer"

import dataFeatured from "../public/data/featured.json"
import dataTrending from "../public/data/trending.json"
import dataUsers from "../public/data/users.json"
import dataNfts from "../public/data/nfts.json"

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
    useEffect(() => {
      setFeaturedCards(dataFeatured);
    }, [])

  const [trendingCards, setTrendingCards] = useState([]);
  useEffect(() => {
    setTrendingCards(dataTrending);
  }, [])

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(dataUsers);
  }, [])

  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setNfts(dataNfts);
  }, [])

  return (
    <>
      <Header/>
      <Featured items={featuredCards}/>
      <Trending cards={trendingCards}/>
      <TopCollectors items={users}/>
      <How/>
      <Auctions cards={nfts}/>
      <Footer/>
    </>
  )
}
