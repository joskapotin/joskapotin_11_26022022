import Hero from '../../components/Hero/Hero'
import HousingList from '../../components/HousingList/HousingList'
import image from '../../assets/images/hero01.png'
import styles from './Home.module.scss'

function Home() {
  return (
    <main id="main-content" className="main">
      <Hero image={image}>
        <h1 className="hero-text">Chez vous, partout et ailleurs</h1>
      </Hero>
      <div className={styles.housing}>
        <HousingList />
      </div>
    </main>
  )
}

export default Home
