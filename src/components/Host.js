function Host({ host, className }) {
  return (
    <div className={className}>
      <p class="host__name">{host.name}</p>
      <img class="host__photo" src={host.picture} alt="" />
    </div>
  );
}

export default Host;
