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
