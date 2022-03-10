import { useState } from 'react'
import PropTypes from 'prop-types'
import RatingItem from '../RatingItem/RatingItem'
import styles from './Rating.module.scss'

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

    for (let i = 0; i <= maxRating; i += 1) {
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
    <fieldset className={`${styles.wrapper} ${className}`}>
      <legend className={styles.legend}>Votre note:</legend>
      {ratingElements}
    </fieldset>
  )
}

export default Rating

Rating.defaultProps = {
  className: '',
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
}
