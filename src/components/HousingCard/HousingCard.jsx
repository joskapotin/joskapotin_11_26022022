import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import { HOUSING } from '../../constants/routes'
import styles from './HousingCard.module.scss'

/**
 *
 * @param {Object} props
 * @param {Object} props.housing
 * @param {String} props.housing.id - The id of the housing. Needed for the link
 * @param {String} props.housing.title - The title of the housing
 * @param {String} props.housing.cover - A link to the housing cover image
 * @returns
 */
function HousingCard({ housing }) {
  return (
    <Link className={styles.link} to={`${HOUSING}/${housing.id}`}>
      <Image className={styles.image} src={housing.cover} />
      <h2 className={styles.text}>{housing.title}</h2>
    </Link>
  )
}

export default HousingCard

HousingCard.propTypes = {
  housing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
}
