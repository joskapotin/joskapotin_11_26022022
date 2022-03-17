import { useContext } from 'react'
import { HousingContext } from '../../contexts/HousingContext'
import HousingCard from './HousingCard/HousingCard'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import styles from './HousingList.module.scss'

function HousingList() {
  const { data, loading, error } = useContext(HousingContext)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Error error={error} />
  }

  const housingListElements = data.map((housing) => (
    <HousingCard key={housing.id} housing={housing} />
  ))

  return <div className={styles.wrapper}>{housingListElements}</div>
}

export default HousingList
