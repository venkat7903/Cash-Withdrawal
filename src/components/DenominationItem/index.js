// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdraw} = props
  const {value} = denominationItem
  const onWithdraw = () => {
    withdraw(value)
  }
  return (
    <li>
      <button type="button" className="denomination" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
