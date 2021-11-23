import ActivityFilters from "../../src/components/activity/ActivityFilters"
import ActivityList from "../../src/components/activity/ActivityList"
import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/activity/Hero"
import { useState, useEffect } from "react"

export default function Index() {
  const [activity, setActivity] = useState([])
  const [activityFilters, setActivityFilters] = useState([])

  useEffect(async () => {
    const dataActivity = await fetch(process.env.apiUrl + '/activities')
    .then((res) => res.json())

    setActivity(dataActivity?.activities)
    setActivityFilters([dataActivity?.filters?.sort, dataActivity?.filters?.type])
  }, [])

  return (
    <div>
      <Header />
      <Hero text="Activity" />
      <ActivityFilters filters={activityFilters} />
      <ActivityList items={activity} />
      <Footer />
    </div>
  )
}
