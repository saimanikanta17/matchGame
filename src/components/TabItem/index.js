import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const clickTab = () => {
    clickTabItem(tabId)
  }

  const btnClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tabs-container">
      <button
        type="button"
        className={`tab-btn ${btnClassName}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
