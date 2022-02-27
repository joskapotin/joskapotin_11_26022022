function TagList({ tags }) {
  const tagListElements = tags.map((tag, index) => (
    <li key={index} className="taglist__item">
      {tag}
    </li>
  ));

  return <ul className="taglist">{tagListElements}</ul>;
}

export default TagList;
