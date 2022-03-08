import PropTypes from 'prop-types'
import './Host.css'

/**
 *
 * @param {Object} props
 * @param {Object} props.host
 * @param {String} props.host.name - The name of the host
 * @param {String} props.host.picture - A link to the host picture
 *  @param {String} props.className - A class to add to the component
 * @returns
 */
function Host({ host, className }) {
  return (
    <div className={`host ${className}`}>
      <p className="host__name">{host.name}</p>
      <img className="host__photo" src={host.picture} alt="" />
    </div>
  )
}

export default Host

Host.defaultProps = {
  className: '',
}

Host.propTypes = {
  className: PropTypes.string,

  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}
