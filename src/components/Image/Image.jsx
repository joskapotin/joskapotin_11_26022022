import { useState } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'

function Image({ className, src, alt }) {
  const [loaded, setLoaded] = useState(false)

  const style = {
    display: loaded ? 'block' : 'none',
  }

  return (
    <>
      {!loaded && <Spinner className={className} />}
      <img
        style={style}
        className={className}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

export default Image

Image.defaultProps = {
  className: '',
  alt: '',
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
