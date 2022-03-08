import PropTypes from 'prop-types'
import './RatingItem.css'

/**
 *
 * @param {Object} props
 * @param {number} props.value - The rating value as a string
 * @param {String} props.checked - Set the status of the radio input
 * @param {String} props.visualyCheck - Needed for styling
 * @param {String} props.handleRating - The function that change the state of the component
 * @returns
 */
function RatingItem({ value, checked, visualyCheck, handleRating }) {
  return (
    <label className="rating-star__form-control">
      <input
        className="rating-star__input"
        name="rating"
        type="radio"
        value={parseInt(value, 10)}
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

export default RatingItem

RatingItem.propTypes = {
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  visualyCheck: PropTypes.bool.isRequired,
  handleRating: PropTypes.func.isRequired,
}
