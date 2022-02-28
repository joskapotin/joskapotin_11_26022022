import PropTypes from 'prop-types'

function Error({ error }) {
  return <h3>Erreur: {error}</h3>
}

export default Error

Error.proptype = {
  error: PropTypes.string,
}
