import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-and-logo-container">
            <p className="logo">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-details">
            <p className="balance-word">Your Balance </p>
            <p className="balance">{balance}</p>
          </div>
          <p className="rupees">in rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationItem={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
