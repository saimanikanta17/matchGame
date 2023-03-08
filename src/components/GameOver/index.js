import './index.css'

const GameOver = props => {
  const {score, playAgain} = props
  const clickReset = () => {
    playAgain()
  }

  return (
    <div className="game-over">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button type="button" onClick={clickReset} className="btn">
        <img
          className="winner"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameOver
