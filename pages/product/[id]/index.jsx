import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header"
import Footer from "../../../src/components/footer/Footer"
import nftData from "../../../public/data/nfts.json"

import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter()
  const productId = router.query.id
  let nft
  let nftId

  for (let i = 0; i < nftData.length; i++) {
    if(productId == nftData[i].id) {
      nftId = nftData[i].id
      nft = nftData[i]
    }
  }

  return (
    <div>
      <Header/>
      <ProductContainer {...nft} owner={nft?.owner}/>
      <Footer/>
    </div>
  )
}
