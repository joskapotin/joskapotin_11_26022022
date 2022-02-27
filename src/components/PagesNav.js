import { NavLink } from "react-router-dom";

function PagesNav() {
  return (
    <nav className="primary-nav" aria-label="primary">
      <NavLink className="primary-nav__link" to="/">
        Accueil
      </NavLink>
      <NavLink className="primary-nav__link" to="/about">
        A propos
      </NavLink>
    </nav>
  );
}

export default PagesNav;
