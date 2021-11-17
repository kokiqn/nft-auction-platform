import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header"
import Footer from "../../../src/components/footer/Footer"
import nftData from "../../../public/data/nfts.json"

import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter()
  const productId = router.query.id
  const nftId = nftData[productId]
  console.log(nftId)

  return (
    <div>
      <Header/>
      <ProductContainer {...nftId} owner={nftId?.owner}/>
      <Footer/>
    </div>
  )
}
