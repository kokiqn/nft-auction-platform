import ActivityFilters from "../../src/components/activity/ActivityFilters"
import ActivityList from "../../src/components/activity/ActivityList"
import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/activity/Hero"
import activityData from "../../public/data/activity.json"

export default function Index() {
  return (
    <div>
      <Header />
      <Hero text="Activity" />
      <ActivityFilters />
      <ActivityList items={activityData} />
      <Footer />
    </div>
  )
}
