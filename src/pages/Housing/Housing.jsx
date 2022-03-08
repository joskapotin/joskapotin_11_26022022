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
import './Housing.css'

function Housing() {
  const { data, loading, error } = useContext(HousingContext)
  const { id } = useParams()

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  const housing = data?.find((item) => item.id === id)

  return (
    <Main className="housing__page">
      <Carousel className="housing__carousel" pictures={housing.pictures} />
      <h1 className="housing__title">{housing.title}</h1>
      <p className="housing__location">{housing.location}</p>
      <SimpleList
        array={housing.tags}
        theme="tags-theme"
        listClassName="housing__taglist"
      />
      <Rating className="housing__rating" rating={housing.rating} />
      <Host host={housing.host} />
      <Accordion
        className="housing__accordion housing__description"
        title="Description"
      >
        <p>{housing.description}</p>
      </Accordion>
      <Accordion
        className="housing__accordion housing__equipments"
        title="Equipements"
      >
        <SimpleList
          array={housing.equipments}
          listClassName="housing__equipments__list"
        />
      </Accordion>
    </Main>
  )
}

export default Housing
