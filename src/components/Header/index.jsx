import Logo from '../Logo'
import PrimaryNav from '../PrimaryNav'
import './index.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <PrimaryNav />
    </header>
  )
}

export default Header
