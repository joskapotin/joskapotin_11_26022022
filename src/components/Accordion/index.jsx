import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import useToggler from '../../utils/hooks/useToggler'
import './index.css'

function Accordion({
  children,
  title,
  theme = 'accordion--default',
  className = '',
  open = false,
}) {
  const [isOpen, toggle] = useToggler(open)
  const statusClassName = isOpen ? 'accordion-open' : 'accordion-close'
  const accordionId = nanoid()

  return (
    <section
      className={`accordion ${theme} ${className}`}
      aria-labelledby={`${title}-title`}
    >
      <button
        aria-expanded={isOpen}
        aria-controls={accordionId}
        className={`accordion__button ${statusClassName}`}
        onClick={toggle}
      >
        {title}
      </button>
      <div
        className="accordion__panel"
        id={accordionId}
        role="region"
        aria-labelledby={`${title}-title`}
      >
        <div className="accordion__content">
          <h2 id={`${title}-title`} className="accordion__title">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
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
