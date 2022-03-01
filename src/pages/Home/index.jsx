import Hero from '../../components/Hero'
import image from '../../assets/images/hero01.png'
import HousingList from '../../components/HousingList'
import './index.css'

function Home() {
  return (
    <main className="main home__page" id="main">
      <Hero text="Chez vous, partout et ailleurs" image={image} />
      <HousingList />
    </main>
  )
}

export default Home
