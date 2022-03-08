import PropTypes from 'prop-types'
import './Spinner.css'

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children - The content to display inside the component
 * @returns
 */
function Spinner({ children }) {
  return (
    <div className="overlay">
      <div className="spinner">{children}</div>
    </div>
  )
}

export default Spinner

Spinner.defaultProps = {
  children: 'Loading...',
}

Spinner.propTypes = {
  children: PropTypes.node,
}
