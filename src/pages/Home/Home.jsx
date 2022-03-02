import Main from '../../components/Main/Main'
import Hero from '../../components/Hero/Hero'
import HousingList from '../../components/HousingList/HousingList'
import image from '../../assets/images/hero01.png'
import './Home.css'

function Home() {
  return (
    <Main className="home__page">
      <Hero text="Chez vous, partout et ailleurs" image={image} />
      <HousingList />
    </Main>
  )
}

export default Home
