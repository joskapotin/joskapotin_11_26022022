import PropTypes from 'prop-types'
import useToggler from '../../utils/hooks/useToggler'
import './Accordion.css'

function Accordion({
  children,
  title,
  theme = 'accordion--default',
  className = '',
  open = false,
}) {
  const [isOpen, toggle] = useToggler(open)
  const statusClassName = isOpen ? 'accordion-open' : 'accordion-close'

  return (
    <div className={`accordion ${theme} ${className}`}>
      <button
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

Accordion.proptype = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
  className: PropTypes.string,
  on: PropTypes.bool,
}
