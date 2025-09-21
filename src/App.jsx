import './App.css'
import CreateNewPip from './components/newPipToggler'
import NavBar from './components/navbar'
import PeopleToFollow from './components/peopleToFollow'
import PipModal from './components/pipModal'
import PipSection from './components/pipSection'
import ProfileCard from './components/profileCard'
import TrendingPipTags from './components/trendingPipTags'
import { useState } from 'react'

function App() {

  // TODO: Get initial data from mock db and create states with usestate hook. Pass to children that needs it.

  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <section className='relative flex flex-col gap-2 p-4'>
      {isModalActive && (
        <PipModal setIsModalActive={setIsModalActive} />
      )}
      <NavBar />
      {/* <!-- Main section --> */}
      <section className="grid grid-cols-12 gap-4 grid-rows-6 h-[calc(100vh-100px)]">
        {/* <!-- Profile card --> */}
        <ProfileCard />
        {/* <!-- Create new pip section --> */}
        <CreateNewPip setIsModalActive={setIsModalActive} />
        {/* <!-- Trending pip tags --> */}
        <TrendingPipTags />
        {/* <!-- Pips section --> */}
        <PipSection />
        {/* <!-- People to follow --> */}
        <PeopleToFollow />
      </section>
    </section>
  )
}

export default App
