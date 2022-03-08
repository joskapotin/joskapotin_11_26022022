import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Carousel.css'
import './Carousel-default-theme.css'

/**
 *
 * @param {Object} props
 * @param {string} props.className - A css class that can be added to the carousel.
 * @param {boolean} props.pictures - An array of links to images.
 * @returns
 */
function Carousel({ className, pictures }) {
  const [current, setCurrent] = useState(0)
  const [currents, setCurrents] = useState([0])
  const { length } = pictures

  useEffect(() => {
    if (length > 2) {
      if (current === 0) setCurrents([length - 1, current, current + 1])
      else if (current === length - 1) setCurrents([current - 1, current, 0])
      else setCurrents([current - 1, current, current + 1])
    } else if (length === 2) setCurrents([current, current + 1])
    else setCurrents([current])
  }, [current, length])

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const pictureElements = currents.map((value) => (
    <div className="carousel__item" key={`carousel-${pictures[value]}`}>
      <img className="carousel__img" src={pictures[value]} alt="" />
    </div>
  ))

  return (
    <div className={`carousel ${className}`}>
      {pictureElements}
      <button
        type="button"
        onClick={prevSlide}
        className="carousel__btn carousel__btn-prev"
      >
        <span className="carousel__btn__text">previous picture</span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="carousel__btn carousel__btn-next"
      >
        <span className="carousel__btn__text">next picture</span>
      </button>
    </div>
  )
}

export default Carousel

Carousel.defaultProps = {
  className: '',
}

Carousel.propTypes = {
  className: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
