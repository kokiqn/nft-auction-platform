import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header"
import Footer from "../../../src/components/footer/Footer"
import nftData from "../../../public/data/nfts.json"

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Index() {
  const router = useRouter()
  const productId = router.query.id
  
  const [product, setProduct] = useState([])
  useEffect(async () => {
    const dataProduct = await fetch(process.env.apiUrl + '/' + 'nfts' + '/' + productId)
    .then((res) => res.json())

    setProduct(dataProduct)
  }, [])
  console.log(product)

  return (
    <div>
      <Header/>
      <ProductContainer {...product} owner={product?.owner}/>
      <Footer/>
    </div>
  )
}
