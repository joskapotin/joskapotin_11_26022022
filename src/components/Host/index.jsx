import './index.css'

function Host({ host, className = 'host__default' }) {
  return (
    <div className={className}>
      <p className="host__name">{host.name}</p>
      <img className="host__photo" src={host.picture} alt="" />
    </div>
  )
}

export default Host
