import './index.css'

const DenominationItem = props => {
  const {key, value, withDraw} = props
  const dothis = () => {
    withDraw(value)
  }
  console.log(key)
  return (
    <li className="buttoner" onClick={dothis}>
      <p>{value}</p>
    </li>
  )
}

export default DenominationItem
