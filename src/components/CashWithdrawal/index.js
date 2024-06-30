import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  withDraw = amt => {
    this.setState(prevState => {
      if (prevState.amt - amt < 0) {
        return {amt: 0}
      }
      return {amt: prevState.amt - amt}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amt} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <div className="head-cont">
            <div className="logo">
              <p>S</p>
            </div>
            <p>SNC BABU</p>
          </div>
          <div className="sec-cont">
            <p className="light">Your Balance</p>
            <div>
              <p className="cont-2-head">{amt}</p>
              <p className="light-2">In Rupees</p>
            </div>
          </div>
          <div className="last-cont">
            <p className="cont-2-head">Withdraw</p>
            <p className="light">CHOOSE SUM (IN RUPEES)</p>
            <ul className="lister">
              {denominationsList.map(x => (
                <DenominationItem
                  key={x.id}
                  value={x.value}
                  withDraw={this.withDraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
