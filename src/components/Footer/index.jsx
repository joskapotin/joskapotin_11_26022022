import Logo from '../Logo'
import './index.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Logo className="logo-light" />
      <p className="copyright">© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
