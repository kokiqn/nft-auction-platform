import Header from "../../../src/components/header/Header"
import ProfileCollection from "../../../src/components/profile/ProfileCollection"
import ProfileHero from "../../../src/components/profile/ProfileHero"
import ProfileUser from "../../../src/components/profile/ProfileUser"
import Footer from "../../../src/components/footer/Footer"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Index() {
  const router = useRouter()
  const profileId = router.query.id

  const [profile, setProfile] = useState([])
  const [profileFilters, setProfileFilters] = useState([])
  const [valueSort, setValueSort] = useState('')
  const [valuePrice, setValuePrice] = useState('')

  const handleChangeSort = ((e) => setValueSort(e.target.value))
  const handleChangePrice = ((e) => setValuePrice(e.target.value))

  const functionsArr = [handleChangeSort, handleChangePrice, valueSort, valuePrice]

  useEffect(async () => {
    const dataProfile = await fetch(process.env.apiUrl + '/users/' + profileId + '?' +
    (valueSort != "" ? `sort=${valueSort}` : '') + '&' + (valuePrice != "" ? `price=${valuePrice}` : ''))
      .then((res) => res.json())

    setProfile(dataProfile?.user)
    setProfileFilters([dataProfile?.filters?.sort, dataProfile?.filters?.price])
  }, [profileId, valueSort, valuePrice])

  const userData = {
    avatarUrl: profile?.avatar?.url,
    verified: profile?.verified,
    id: profile?.id,
  }

  return (
    <div>
      <Header />
      <ProfileHero image={profile?.avatar?.backgroundUrl} />
      <ProfileUser
        name={profile?.username}
        info={profile?.info}
        avatar={profile?.avatar?.url}
        verified={profile?.verified}
      />
      <ProfileCollection
        user={userData}
        items={profile?.nfts}
        filters={profileFilters}
        functions={functionsArr}
      />
      <Footer />
    </div>
  )
}
