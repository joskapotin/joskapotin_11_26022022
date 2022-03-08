import PropTypes from 'prop-types'
import useToggler from '../../hooks/useToggler'
import './Accordion.css'
import './Accordion-default-theme.css'

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children - The content to render inside the accordion panel.
 * @param {string} props.title - The title of the accordion. Will be the button text.
 * @param {string} props.className - A css class that can be added to the accordion.
 * @param {boolean} props.open - The accordion default state.
 * @returns
 */
function Accordion({ children, title, className, open }) {
  const [isOpen, toggle] = useToggler(open)
  const statusClassName = isOpen ? 'accordion-open' : 'accordion-close'

  return (
    <div className={`accordion ${className}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${title}-panel`}
        className={`accordion__button ${statusClassName}`}
        onClick={toggle}
        id={`${title}-title`}
      >
        {title}
      </button>
      <div
        className="accordion__panel"
        id={`${title}-panel`}
        role="region"
        aria-labelledby={`${title}-title`}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  )
}

export default Accordion

Accordion.defaultProps = {
  className: '',
  open: false,
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
}
