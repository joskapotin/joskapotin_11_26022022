import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import './PrimaryNav.css'

function PrimaryNav() {
  return (
    <nav className="primary-nav" aria-label="primary">
      <NavLink className="primary-nav__link" to={ROUTES.HOME}>
        Accueil
      </NavLink>
      <NavLink className="primary-nav__link" to={ROUTES.ABOUT}>
        A propos
      </NavLink>
    </nav>
  )
}

export default PrimaryNav
