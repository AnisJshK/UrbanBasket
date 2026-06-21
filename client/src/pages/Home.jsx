import DashboardHero from '../components/DashboardHero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicies from '../components/OurPolicies'
const Home = () => {
  return (
    <div>
      <main className="pt-19 px-6 md:px-12 lg:px-20 max-w-10xl mx-auto">
        <DashboardHero />
        <LatestCollection/>
        <BestSeller/>
        <OurPolicies/>
      </main>
    </div>
  )
}

export default Home