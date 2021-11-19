import Header from "../../src/components/header/Header"
import ProfileCollection from "../../src/components/profile/ProfileCollection"
import ProfileHero from "../../src/components/profile/ProfileHero"
import ProfileUser from "../../src/components/profile/ProfileUser"
import Footer from "../../src/components/footer/Footer"

import profileData from "../../public/data/profile.json"

export default function Index() {
  const userData = {
    avatarUrl: profileData?.avatar?.url,
    verified: profileData?.verified
  }

  return (
    <div>
      <Header />
      <ProfileHero image={profileData?.avatar?.backgroundUrl} />
      <ProfileUser
        name={profileData?.username}
        info={profileData?.info}
        avatar={profileData?.avatar?.url}
        verified={profileData?.verified}
      />
      <ProfileCollection
        user={userData}
        items={profileData?.nfts}        
      />
      <Footer />
    </div>
  )
}
