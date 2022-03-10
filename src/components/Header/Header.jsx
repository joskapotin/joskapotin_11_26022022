import Logo from '../Logo/Logo'
import PrimaryNav from '../PrimaryNav/PrimaryNav'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={`header ${styles.wrapper}`}>
      <Logo />
      <PrimaryNav />
    </header>
  )
}

export default Header
