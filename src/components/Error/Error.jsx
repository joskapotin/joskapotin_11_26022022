import PropTypes from 'prop-types'

function Error({ error }) {
  return (
    <div className="error__container">
      <h3>Une erreur est survenue: {error}</h3>
    </div>
  )
}

export default Error

Error.defaultProps = {
  error: 'Erreur inconnue',
}

Error.propTypes = {
  error: PropTypes.string,
}
