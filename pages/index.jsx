import Header from "../src/components/header/Header"
import Trending from "../src/components/trending/Trending"
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer"
import How from "../src/components/how/How"
import Featured from "../src/components/featured/Featured"
import CollectorColumn from "../src/components/collectors/CollectorColumn"

export default function Index() {
  return (
    <>
      <Header/>
      <Trending/>
      <CollectorColumn/>
      <Featured/>
      <How/>
      <Auctions/>
      <Footer/>
    </>
  )
}
