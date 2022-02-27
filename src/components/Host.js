function Host({ host }) {
  return (
    <div className="housing__host">
      <p>{host.name}</p>
      <p>{host.picture}</p>
    </div>
  );
}

export default Host;
