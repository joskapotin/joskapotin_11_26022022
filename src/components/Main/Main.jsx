import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children - The content to display inside the component
 * @param {String} props.className - A class to add to the component
 * @returns
 */
function Main({ children, className }) {
  return (
    <main className={`main ${className}`} id="main">
      {children}
    </main>
  )
}

export default Main

Main.defaultProps = {
  className: null,
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
