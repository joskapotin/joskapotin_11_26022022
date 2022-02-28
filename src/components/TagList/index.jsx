import PropTypes from 'prop-types'
import './index.css'

function TagList({ tags, className = 'taglist__default' }) {
  const tagListElements = tags.map((tag, index) => (
    <li key={index} className="taglist__item">
      {tag}
    </li>
  ))

  return <ul className={className}>{tagListElements}</ul>
}

export default TagList

TagList.proptype = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  className: PropTypes.string,
}
