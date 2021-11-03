import Header from "../src/components/header/Header"
import Trending from "../src/components/trending/Trending"
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer"

export default function Index() {
  return (
    <>
      <Header/>
      <Trending/>
      <Auctions/>
      <Footer/>
    </>
  )
}
