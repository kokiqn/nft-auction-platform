import Header from "../src/components/header/Header"
import Card from "../src/components/card/Card"

export default function Index() {
  let defaults = {
    "name": String,
    "likes": Number,
    "mediaUrl": String,
    "user": {
      "avatarUrl": String,
      "verified": Boolean
    },
    "price": String,
    "currency": String
  }
  
  return (
    <>
      <Header/>
      <Card defaults={defaults}/>
    </>
  )
}
