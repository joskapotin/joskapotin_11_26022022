import PropTypes from 'prop-types'
import useToggler from '../../hooks/useToggler'
import styles from './Accordion.module.scss'

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children - The content to render inside the accordion panel.
 * @param {string} props.title - The title of the accordion. Will be the button text.
 * @param {boolean} props.open - The accordion default state.
 * @returns
 */
function Accordion({ children, title, open }) {
  const [isOpen, toggle] = useToggler(open)

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${title}-panel`}
        className={`${styles.button} ${isOpen ? styles.open : styles.close}`}
        onClick={toggle}
        id={`${title}-title`}
      >
        {title}
      </button>
      <div
        className={styles.panel}
        id={`${title}-panel`}
        role="region"
        aria-labelledby={`${title}-title`}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion

Accordion.defaultProps = {
  open: false,
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
}
