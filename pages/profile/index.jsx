import ProfileCollectionFilters from "../../src/components/profile/ProfileCollectionFilters"
import ProfileHero from "../../src/components/profile/ProfileHero"
import ProfileUser from "../../src/components/profile/ProfileUser"

export default function index() {
  return (
    <div>
      <ProfileHero/>
      <ProfileUser/>
      <ProfileCollectionFilters/>
    </div>
  )
}
