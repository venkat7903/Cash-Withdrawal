// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="sub-app-container">
          <div className="profile-container">
            <h1 className="profile-icon">S</h1>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="desc">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="desc currency">In Rupees</p>
          <p className="profile-name">Withdraw</p>
          <p className="desc">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationItem={each}
                key={each.id}
                withdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
