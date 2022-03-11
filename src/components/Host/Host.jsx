import PropTypes from 'prop-types'
import styles from './Host.module.scss'

/**
 *
 * @param {Object} props
 * @param {Object} props.host
 * @param {String} props.host.name - The name of the host
 * @param {String} props.host.picture - A link to the host picture
 * @returns
 */
function Host({ host }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{host.name}</p>
      <img className={styles.photo} src={host.picture} alt="" />
    </div>
  )
}

export default Host

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}
