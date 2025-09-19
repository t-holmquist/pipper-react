import './App.css'
import CreateNewPip from './components/createNewPip'
import NavBar from './components/navbar'
import PeopleToFollow from './components/peopleToFollow'
import PipSection from './components/pipSection'
import ProfileCard from './components/profileCard'
import TrendingPipTags from './components/trendingPipTags'

function App() {

  return (
    <section className='relative flex flex-col gap-2 p-4'>
      <NavBar />
      {/* <!-- Main section --> */}
      <section className="grid grid-cols-12 gap-4 grid-rows-6 h-[calc(100vh-100px)]">
        {/* <!-- Profile card --> */}
        <ProfileCard />
        {/* <!-- Create new pip section --> */}
        <CreateNewPip />
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
