import PropTypes from 'prop-types'
import styles from './Spinner.module.scss'

function Spinner({ className }) {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.animation}>
        <span className={styles.text}>Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

Spinner.defaultProps = {
  className: 'spinner',
}

Spinner.propTypes = {
  className: PropTypes.string,
}
