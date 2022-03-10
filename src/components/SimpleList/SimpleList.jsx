/* eslint react/no-array-index-key: "off" */
import PropTypes from 'prop-types'
import styles from './SimpleList.module.scss'

/**
 *
 * @param {Object} props
 * @param {array} props.array - An array of element to break down into a list. Be careful that the index is use as a key. https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
 * @param {string} props.theme - Add a css class for the theme.
 * @param {string} props.listClassName - Add a css class for styling the list
 * @param {string} props.itemClassName - Add a css class for styling the list items
 * @returns
 */
function SimpleList({ array, theme, listClassName, itemClassName }) {
  const listItemElements = array.map((item, index) => (
    <li key={`listItem-${index}`} className={itemClassName}>
      {item}
    </li>
  ))
  return (
    <ul className={`${styles[theme]} ${listClassName}`}>{listItemElements}</ul>
  )
}

export default SimpleList

SimpleList.defaultProps = {
  theme: null,
  listClassName: 'simple-list',
  itemClassName: 'simple-list__item',
}

SimpleList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  theme: PropTypes.string,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
}
