import { useContext } from 'react'
import { HousingContext } from '../../utils/contexts/HousingContext'
import HousingCard from '../HousingCard'
import Spinner from '../Spinner'
import Error from '../Error'
import './index.css'

function HousingList() {
  const { data, loading, error } = useContext(HousingContext)

  if ((loading || !data || data.length === 0) && !error)
    return <Spinner>Loading...</Spinner>

  if (error) return <Error error={error} />

  const housingListElements = data.map((housing) => (
    <HousingCard key={housing.id} housing={housing} />
  ))

  return <div className="card-grid">{housingListElements}</div>
}

export default HousingList
