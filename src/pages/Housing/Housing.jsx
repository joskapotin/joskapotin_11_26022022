import { useContext } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { NOTFOUND } from '../../constants/routes'
import { HousingContext } from '../../contexts/HousingContext'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import Host from '../../components/Host/Host'
import Accordion from '../../components/Accordion/Accordion'
import Spinner from '../../components/Spinner/Spinner'
import Error from '../../components/Error/Error'
import styles from './Housing.module.scss'

function Housing() {
  const { data, loading, error } = useContext(HousingContext)
  const { id } = useParams()

  const housing = data.find((item) => item.id === id)

  if (loading) {
    return (
      <main id="main-content" className="main">
        <Spinner />
      </main>
    )
  }

  if (error) {
    return (
      <main id="main-content" className="main">
        <Error error={error} />
      </main>
    )
  }

  if (!housing) {
    return <Navigate to={NOTFOUND} />
  }

  return (
    <main id="main-content" className={`main ${styles.wrapper}`}>
      <div className={styles.carousel}>
        <Carousel pictures={housing.pictures} />
      </div>

      <h1 className={styles.title}>{housing.title}</h1>

      <p className={styles.location}>{housing.location}</p>

      <ul className={styles.tags}>
        {housing.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className={styles.rating}>
        <Rating rating={housing.rating} />
      </div>

      <div className={styles.host}>
        <Host host={housing.host} />
      </div>

      <div className={styles.info}>
        <Accordion title="Description">
          <p>{housing.description}</p>
        </Accordion>

        <Accordion title="Equipements">
          <ul className={styles.equipments}>
            {housing.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </main>
  )
}

export default Housing
