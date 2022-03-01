import { useState } from 'react'
import PropTypes from 'prop-types'
import RatingStar from './RatingStar'

function Rating({ rating, className, theme = 'rating__default' }) {
  const [ratingValue, setRatingValue] = useState(rating)

  function handleRating(value) {
    setRatingValue(value)
  }

  function createRatingElements(ratingValue) {
    const maxRating = 5
    const ratingElements = []

    for (let i = 1; i <= maxRating; i++) {
      const checked = i === ratingValue ? true : false
      const visualyCheck = i <= ratingValue ? true : false

      ratingElements.push(
        <RatingStar
          key={i}
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
    <fieldset className={`rating ${theme} ${className}`}>
      <legend className="rating__legend">Votre note:</legend>
      {ratingElements}
    </fieldset>
  )
}

export default Rating

Rating.proptype = {
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string,
}
