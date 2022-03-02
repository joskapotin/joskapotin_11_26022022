import PropTypes from 'prop-types'

function Main({ children, theme = 'main--default', className }) {
  return (
    <main className={`main ${theme} ${className}`} id="main">
      {children}
    </main>
  )
}

export default Main

Main.proptype = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  className: PropTypes.string,
}
