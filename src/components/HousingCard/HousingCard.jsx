import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HousingCard.css'

function HousingCard({ housing }) {
  const style = {
    backgroundImage: 'url(' + housing.cover + ')',
  }
  return (
    <Link className="card__link" to={`/housing/${housing.id}`} style={style}>
      <span className="card__text">{housing.title}</span>
    </Link>
  )
}

export default HousingCard

HousingCard.proptype = {
  housing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}
