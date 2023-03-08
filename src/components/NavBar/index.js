import './index.css'

const NavBar = props => {
  const {score, second} = props
  return (
    <div className="nav-bar flex-row">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="game-details flex-row">
        <li className="flex-row">
          <p>Score:</p>
          <p>{score}</p>
        </li>
        <li className="game-timer flex-row">
          <img
            className="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{second} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
