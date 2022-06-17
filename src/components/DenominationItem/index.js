import './index.css'

const DenominationItem = props => {
  const {denominationItem, updateBalance} = props
  const {value} = denominationItem
  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li>
      <button
        className="amount-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
