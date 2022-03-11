import PropTypes from 'prop-types'
import styles from './Hero.module.scss'

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children - The content to render inside the hero.
 * @param {string} props.image - The background image of the hero.
 * @returns
 */
function Hero({ children, image }) {
  const style = {
    backgroundImage: `url(${image})`,
  }

  return (
    <div className={`hero ${styles.wrapper}`} style={style}>
      {children}
    </div>
  )
}

export default Hero

Hero.defaultProps = {
  children: null,
}

Hero.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
}
