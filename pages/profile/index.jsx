import ProfileCollection from "../../src/components/profile/ProfileCollection"
import ProfileHero from "../../src/components/profile/ProfileHero"
import ProfileUser from "../../src/components/profile/ProfileUser"

export default function index() {
  return (
    <div>
      <ProfileHero/>
      <ProfileUser/>
      <ProfileCollection/>
    </div>
  )
}
