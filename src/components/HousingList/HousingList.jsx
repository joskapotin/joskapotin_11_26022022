import { useContext } from 'react'
import { HousingContext } from '../../contexts/HousingContext'
import HousingCard from '../HousingCard/HousingCard'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import './HousingList.css'

function HousingList() {
  const { data, loading, error } = useContext(HousingContext)

  if (loading) {
    return <Spinner>Loading...</Spinner>
  }

  if (error) {
    return <Error error={error} />
  }

  const housingListElements = data?.map((housing) => (
    <HousingCard key={housing.id} housing={housing} />
  ))

  return <div className="card-grid">{housingListElements}</div>
}

export default HousingList
