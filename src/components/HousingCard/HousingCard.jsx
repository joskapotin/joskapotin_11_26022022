import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { HOUSING } from '../../constants/routes'
import './HousingCard.css'

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
  const style = {
    backgroundImage: `url(${housing.cover})`,
  }
  return (
    <Link className="card__link" to={`${HOUSING}/${housing.id}`} style={style}>
      <span className="card__text">{housing.title}</span>
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
