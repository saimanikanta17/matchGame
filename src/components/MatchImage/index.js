import './index.css'

const MatchImage = props => {
  const {url} = props
  return (
    <div>
      <img className="image" src={url} alt="match" />
    </div>
  )
}

export default MatchImage
