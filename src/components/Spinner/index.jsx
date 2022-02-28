import './index.css'

export default function Spinner(props) {
  return (
    <div className="overlay">
      <div className="spinner">{props.children}</div>
    </div>
  )
}
