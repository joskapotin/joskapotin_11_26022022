import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { HousingContext } from '../../contexts/HousingContext'
import Main from '../../components/Main/Main'
import Carousel from '../../components/Carousel/Carousel'
import SimpleList from '../../components/SimpleList/SimpleList'
import Rating from '../../components/Rating/Rating'
import Host from '../../components/Host/Host'
import Accordion from '../../components/Accordion/Accordion'
import Spinner from '../../components/Spinner/Spinner'
import Error from '../../components/Error/Error'
import styles from './Housing.module.scss'

function Housing() {
  const { data, loading, error } = useContext(HousingContext)
  const { id } = useParams()

  if (loading) {
    return (
      <Main>
        <Spinner />
      </Main>
    )
  }

  if (error) {
    return (
      <Main>
        <Error error={error} />
      </Main>
    )
  }

  const housing = data?.find((item) => item.id === id)

  return (
    <Main className={styles.wrapper}>
      <Carousel className={styles.carousel} pictures={housing.pictures} />
      <h1 className={styles.title}>{housing.title}</h1>
      <p className={styles.location}>{housing.location}</p>
      <SimpleList
        array={housing.tags}
        theme="tags"
        listClassName={styles.taglist}
      />
      <Rating className={styles.rating} rating={housing.rating} />
      <Host className={styles.host} host={housing.host} />
      <Accordion
        className={`accordion ${styles.accordion} ${styles.description}`}
        title="Description"
      >
        <p>{housing.description}</p>
      </Accordion>
      <Accordion
        className={`accordion ${styles.accordion} ${styles.equipments}`}
        title="Equipements"
      >
        <SimpleList
          array={housing.equipments}
          listClassName={styles.equipments__list}
        />
      </Accordion>
    </Main>
  )
}

export default Housing
