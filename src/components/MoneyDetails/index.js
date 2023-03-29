// Write your code here
import './index.css'

// eslint-disable-next-line arrow-body-style
const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-container"
        />
        <div>
          <p className="money-details-text">Your Balance</p>
          <p className="money-details-rs" 
          // testid="balanceAmount"
          >
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-container"
        />
        <div>
          <p className="money-details-text">Your Income</p>
          <p className="money-details-rs" 
          // testid="incomeAmount"
          >
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-container"
        />
        <div>
          <p className="money-details-text">Your Expenses</p>
          <p className="money-details-rs" 
          // testid="expensesAmount"
          >
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
