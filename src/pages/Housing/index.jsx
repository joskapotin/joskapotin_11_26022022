import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { HousingContext } from '../../utils/contexts/HousingContext'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Carousel from '../../components/Carousel'
import TagList from '../../components/TagList'
import Rating from '../../components/Rating'
import Host from '../../components/Host'
import Accordion from '../../components/Accordion'
import './index.css'

function Housing() {
  const { data, loading, error } = useContext(HousingContext)
  const { id } = useParams()

  const housing = data.find((item) => item.id === id)

  const equipmentElements = housing.equipments.map((equipment, index) => (
    <li key={index} className="equipment-list__item">
      {equipment}
    </li>
  ))

  if ((loading || !data || data.length === 0) && !error)
    return <Spinner>Loading...</Spinner>

  if (error) return <Error error={error} />

  return (
    <main className="main housing__page">
      <Carousel className="housing__carousel" pictures={housing.pictures} />
      <h1 className="housing__title">{housing.title}</h1>
      <p className="housing__location">{housing.location}</p>
      <TagList className="housing__taglist" tags={housing.tags} />
      <Rating className="housing__rating" rating={housing.rating} />
      <Host className="housing__host" host={housing.host} />
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
        <ul className="housing__equipments__list">{equipmentElements}</ul>
      </Accordion>
    </main>
  )
}

export default Housing
