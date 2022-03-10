import PropTypes from 'prop-types'
import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'

function Footer({ className }) {
  const year = new Date().getFullYear()
  return (
    <footer className={`${className} ${styles.wrapper}`}>
      <Logo className={styles.logo} theme="white" />
      <p className={styles.copyright}>© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

Footer.defaultProps = {
  className: 'footer',
}

Footer.propTypes = {
  className: PropTypes.string,
}
