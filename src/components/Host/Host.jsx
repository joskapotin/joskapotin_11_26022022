import PropTypes from 'prop-types'
import './Host.css'

function Host({ host, className = 'host__default' }) {
  return (
    <div className={className}>
      <p className="host__name">{host.name}</p>
      <img className="host__photo" src={host.picture} alt="" />
    </div>
  )
}

export default Host

Host.proptype = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
}
