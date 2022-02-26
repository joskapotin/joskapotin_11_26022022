import { Link } from "react-router-dom";

function PagesNav() {
  return (
    <nav className="nav-main" aria-label="primary">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  );
}

export default PagesNav;
