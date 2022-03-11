import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

/**
 *
 * @param {Object} props
 * @param {boolean} props.pictures - An array of links to images.
 * @returns
 */
function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const [currents, setCurrents] = useState([0])
  const { length } = pictures

  useEffect(() => {
    const updateCurrents = () => {
      if (length > 2) {
        switch (current) {
          case 0:
            setCurrents([length - 1, current, current + 1])
            break
          case length - 1:
            setCurrents([current - 1, current, 0])
            break
          default:
            setCurrents([current - 1, current, current + 1])
            break
        }
      } else if (length === 2) {
        switch (current) {
          case 1:
            setCurrents([current, 0])
            break
          default:
            setCurrents([current, 1])
            break
        }
      } else setCurrents([current])
    }
    updateCurrents()
  }, [current, length])

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const pictureElements = currents.map((value, index) => (
    <div
      className={
        index === 1 ? `${styles.slide} ${styles.current}` : styles.slide
      }
      key={`carousel-${pictures[value]}`}
    >
      <img className={styles.image} src={pictures[value]} alt="" />
    </div>
  ))

  return (
    <div className={`${styles.wrapper}`}>
      {pictureElements}
      <button
        type="button"
        onClick={prevSlide}
        className={`${styles.button} ${styles.previous}`}
      >
        <span className={styles.text}>previous picture</span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className={`${styles.button} ${styles.next}`}
      >
        <span className={styles.text}>next picture</span>
      </button>
    </div>
  )
}

export default Carousel

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
