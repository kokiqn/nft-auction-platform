import Header from "../../../src/components/header/Header"
import ProfileCollection from "../../../src/components/profile/ProfileCollection"
import ProfileHero from "../../../src/components/profile/ProfileHero"
import ProfileUser from "../../../src/components/profile/ProfileUser"
import Footer from "../../../src/components/footer/Footer"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import profile from "../../../public/data/profile.json"

export default function Index() {
  const router = useRouter()
  const profileId = router.query.id
  
  const [profile, setProfile] = useState([])
  const [profileFilters, setProfileFilters] = useState([])

  useEffect(async () => {
    const dataProfile = await fetch(process.env.apiUrl + '/users/' + profileId)
    .then((res) => res.json())

    setProfile(dataProfile.user)
    setProfileFilters([dataProfile?.filters?.sort, dataProfile?.filters?.price])
  }, [profileId])

  const userData = {
    avatarUrl: profile?.avatar?.url,
    verified: profile?.verified
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
      />
      <Footer />
    </div>
  )
}
