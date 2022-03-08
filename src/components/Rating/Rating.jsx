import { useState } from 'react'
import PropTypes from 'prop-types'
import RatingItem from '../RatingItem/RatingItem'

/**
 *
 * @param {Object} props
 * @param {string} props.rating - The rating value as a string
 * @param {String} props.className - A class to add to the component
 * @returns
 */
function Rating({ rating, className }) {
  const [ratingValue, setRatingValue] = useState(rating)

  function handleRating(value) {
    setRatingValue(value)
  }

  function createRatingElements(value) {
    const maxRating = 5
    const ratingElements = []

    for (let i = 1; i <= maxRating; i += 1) {
      const checked = i === value
      const visualyCheck = i <= value

      ratingElements.push(
        <RatingItem
          key={`ratingItem-${i}`}
          value={i}
          checked={checked}
          visualyCheck={visualyCheck}
          handleRating={() => handleRating(i)}
        />
      )
    }

    return ratingElements
  }

  const ratingElements = createRatingElements(ratingValue)

  return (
    <fieldset className={`${className}`}>
      <legend className="rating__legend">Votre note:</legend>
      {ratingElements}
    </fieldset>
  )
}

export default Rating

Rating.defaultProps = {
  className: null,
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
}
