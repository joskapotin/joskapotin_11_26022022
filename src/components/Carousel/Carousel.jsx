import { useState } from 'react'
import PropTypes from 'prop-types'
import './Carousel.css'

function Carousel({ theme = 'carousel--default', className = '', pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const isLoaded = (index) => {
    if (index === current) return true
    return false
  }

  const pictureElements = pictures.map((picture, index) => (
    <div className="carousel__item" key={index}>
      {isLoaded(index) && (
        <img className="carousel__img" src={picture} alt="" />
      )}
    </div>
  ))
  return (
    <div className={`carousel ${theme} ${className}`}>
      <button onClick={prevSlide} className="carousel__btn carousel__btn-prev">
        <span className="carousel__btn__text">previous picture</span>
      </button>
      <button onClick={nextSlide} className="carousel__btn carousel__btn-next">
        <span className="carousel__btn__text">next picture</span>
      </button>
      {pictureElements}
    </div>
  )
}

export default Carousel

Carousel.proptype = {
  className: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string),
}
