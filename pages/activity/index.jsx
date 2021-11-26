import ActivityFilters from "../../src/components/activity/ActivityFilters"
import ActivityList from "../../src/components/activity/ActivityList"
import Header from "../../src/components/header/Header"
import Footer from "../../src/components/footer/Footer"
import Hero from "../../src/components/activity/Hero"
import { useState, useEffect } from "react"

export default function Index() {
  const [activity, setActivity] = useState([])
  const [activityFilters, setActivityFilters] = useState([])
  const [valueSort, setValueSort] = useState('')
  const [valueType, setValueType] = useState('')

  const handleChangeSort = ((e) => setValueSort(e.target.value))
  const handleChangeType = ((e) => setValueType(e.target.value))

  useEffect(async () => {
    const dataActivity = await fetch(process.env.apiUrl + '/activities' + '?' +
      (valueSort != "" ? `sort=${valueSort}` : '') + '&' + (valueType != "" ? `Type=${valueType}` : ''))
      .then((res) => res.json())

    setActivity(dataActivity?.activities)
    setActivityFilters([dataActivity?.filters?.sort, dataActivity?.filters?.type])
  }, [])

  return (
    <div>
      <Header />
      <Hero text="Activity" />
      <ActivityFilters
        filters={activityFilters}
        onChangeSort={handleChangeSort}
        onChangeType={handleChangeType}
        valueSort={valueSort}
        valueType={valueType}
      />
      <ActivityList items={activity} />
      <Footer />
    </div>
  )
}
