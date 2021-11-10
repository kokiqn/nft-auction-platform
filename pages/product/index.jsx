import React from 'react'
import Header from '../../src/components/header/Header'
import Footer from '../../src/components/footer/Footer'
import ProductImage from '../../src/components/product/ProductImage'
import ProductInfoTitle from '../../src/components/product/ProductInfoTitle'
import ProductInfoStatus from '../../src/components/product/ProductInfoStatus'
import ProductInfoLikes from '../../src/components/product/ProductInfoLikes'
import ProductInfoCreator from '../../src/components/product/ProductInfoCreator'
import ProductInfoTimer from '../../src/components/product/ProductInfoTimer'

export default function Index() {
  return (
    <div>
      <Header/>
      <ProductInfoTimer/>
      <ProductImage url="/images/nft.jpg"/>
      <ProductInfoTitle/>
      <ProductInfoStatus/>
      <Footer/>
    </div>
  )
}
