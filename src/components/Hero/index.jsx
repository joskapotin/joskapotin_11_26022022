import PropTypes from 'prop-types'
import './index.css'

function Hero({ text = '', image }) {
  const style = {
    backgroundImage: 'url(' + image + ')',
  }

  return (
    <div className="hero" style={style}>
      <h1 className="hero-text">{text}</h1>
    </div>
  )
}

export default Hero

Hero.proptype = {
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
}
