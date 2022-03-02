import PropTypes from 'prop-types'
import './SimpleList.css'

function SimpleList({
  array,
  theme = 'simple-list--default',
  listClassName = '',
  itemClassName = '',
}) {
  const listItemElements = array.map((item, index) => (
    <li key={index} className={itemClassName}>
      {item}
    </li>
  ))
  return <ul className={`${theme} ${listClassName}`}>{listItemElements}</ul>
}

export default SimpleList

SimpleList.propTypes = {
  array: PropTypes.array.isRequired,
  theme: PropTypes.string,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
}
