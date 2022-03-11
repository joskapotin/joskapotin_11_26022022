import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import styles from './PrimaryNav.module.scss'

function PrimaryNav() {
  return (
    <nav className={styles.wrapper} aria-label="primary">
      <NavLink
        className={(navData) =>
          navData.isActive ? styles.active : styles.link
        }
        to={ROUTES.HOME}
      >
        Accueil
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? styles.active : styles.link
        }
        to={ROUTES.ABOUT}
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default PrimaryNav
