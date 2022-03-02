import PropTypes from 'prop-types'
import './Hero.css'

function Hero({ children, image }) {
  const style = {
    backgroundImage: 'url(' + image + ')',
  }

  return (
    <div className="hero" style={style}>
      {children}
    </div>
  )
}

export default Hero

Hero.proptype = {
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
}
