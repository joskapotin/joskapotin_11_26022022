import PropTypes from 'prop-types'
import './index.css'

function RatingStar({
  value = 'star',
  checked = false,
  visualyCheck = false,
  handleRating,
}) {
  return (
    <label className="rating-star__form-control">
      <input
        className="rating-star__input"
        name="rating"
        type="radio"
        value={value}
        checked={checked}
        data-visualycheck={visualyCheck}
        onChange={handleRating}
      />
      <span className="rating__text">
        {value > 1 ? `${value} stars` : '1 star'}
      </span>
    </label>
  )
}

export default RatingStar

RatingStar.proptype = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  visualyCheck: PropTypes.bool,
  handleRating: PropTypes.func.isRequired,
}
