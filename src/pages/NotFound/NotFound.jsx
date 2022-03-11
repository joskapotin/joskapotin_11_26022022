import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

function NotFound() {
  return (
    <main className={`main ${styles.wrapper}`}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Oups! La page que vous demandez n&apos;existe pas.
      </h2>
      <Link to="/" className={styles.link}>
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default NotFound
