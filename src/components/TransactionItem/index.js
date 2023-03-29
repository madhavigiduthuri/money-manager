// Write your code here
import './index.css'

const TransactionItem = (props) => {
  const {details,onDelete} = props
  const {id} = details
  // console.log("mad",details);
  if (details?.titleName && details?.amount && details?.type) {
    return (
      <li className="transaction-list-item">
          <p className="table-header">{details?.titleName}</p>
          <p className="table-header">Rs {details?.amount}</p>
          <p className="table-header">{details?.type}</p>
          <button type="button" className="delete-button table-header" onClick={() => onDelete(id)} >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
      </li>
    )
  } return null
}

export default TransactionItem
