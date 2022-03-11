import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={`footer ${styles.wrapper}`}>
      <Logo theme="white" />
      <p className={styles.copyright}>© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
