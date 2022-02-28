function TagList({ tags, className }) {
  const tagListElements = tags.map((tag, index) => (
    <li key={index} className="taglist__item">
      {tag}
    </li>
  ));

  return <ul className={className}>{tagListElements}</ul>;
}

export default TagList;
