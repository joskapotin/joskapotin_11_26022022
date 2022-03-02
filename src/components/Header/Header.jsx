import Logo from '../Logo/Logo'
import PrimaryNav from '../PrimaryNav/PrimaryNav'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <PrimaryNav />
    </header>
  )
}

export default Header
