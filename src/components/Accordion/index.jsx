import PropTypes from 'prop-types'
import useToggler from '../../utils/hooks/useToggler'
import './index.css'

function Accordion({
  children,
  title,
  className = 'accordion__default',
  open = false,
}) {
  const [isOpen, toggle] = useToggler(open)

  const statusClassName = isOpen ? 'accordion-open' : 'accordion-close'

  return (
    <div className={`accordion ${className}`}>
      <button
        className={`accordion__button ${statusClassName}`}
        onClick={toggle}
      >
        {title}
      </button>
      <div className="accordion__panel">
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  )
}

export default Accordion

Accordion.proptype = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  on: PropTypes.bool,
}
