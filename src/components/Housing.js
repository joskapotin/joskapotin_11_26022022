function Housing({ housing }) {
  return (
    <article className="card">
      <img className="card__img" src={housing.cover} alt="" />
      <h2 className="card__title">{housing.title}</h2>
    </article>
  );
}

export default Housing;
