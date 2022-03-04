import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Logo theme="logo-white" />
      <p className="copyright">© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer