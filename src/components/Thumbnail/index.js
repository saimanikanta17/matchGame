import './index.css'

const Thumbnail = props => {
  const {details, getScore} = props
  const {thumbnailUrl, imageUrl} = details
  const clickThumbnail = () => {
    getScore(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" onClick={clickThumbnail}>
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
