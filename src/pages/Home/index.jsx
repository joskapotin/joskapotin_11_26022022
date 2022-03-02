import Main from '../../components/Main'
import Hero from '../../components/Hero'
import image from '../../assets/images/hero01.png'
import HousingList from '../../components/HousingList'
import './index.css'

function Home() {
  return (
    <Main className="home__page">
      <Hero text="Chez vous, partout et ailleurs" image={image} />
      <HousingList />
    </Main>
  )
}

export default Home
