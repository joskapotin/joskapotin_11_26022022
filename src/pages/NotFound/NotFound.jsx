import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="main not-found__page" id="main">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="not-found__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default NotFound
