import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header"
import Footer from "../../../src/components/footer/Footer"
import nftData from "../../../public/data/nfts.json"

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Index() {
  const router = useRouter()
  const productId = router.query.id
  let nft
  let nftId
  
  const [product, setProduct] = useState([])
  useEffect(async () => {
    const dataProduct = await fetch(process.env.apiUrl + '/' + 'nfts')
    .then((res) => res.json())

    for (let i = 0; i < dataProduct.length; i++) {
      if(productId == dataProduct[i].id) {
        setProduct(dataProduct[i])
      }
    }
  }, [])

  for (let i = 0; i < nftData.length; i++) {
    if(productId == nftData[i].id) {
      nftId = nftData[i].id
      nft = nftData[i]
    }
  }

  return (
    <div>
      <Header/>
      <ProductContainer {...product} owner={product?.owner}/>
      <Footer/>
    </div>
  )
}
