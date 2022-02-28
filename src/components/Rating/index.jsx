import PropTypes from 'prop-types'

function Rating({ rating, className = 'rating__default' }) {
  return <span className={className}>{rating}</span>
}

export default Rating

Rating.proptype = {
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
}
