/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    transactionDetailsList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  handleChangeTitle = e => {
    this.setState(prevState => ({
      ...prevState,
      titleInput: e.target.value,
    }))
  }

  handleChangeAmount = e => {
    this.setState(prevState => ({
      ...prevState,
      amountInput: e.target.value,
    }))
  }

  handleChangeType = e => {
    this.setState(prevState => ({
      ...prevState,
      typeInput: e.target.value,
    }))
  }

  onClickSubmit = e => {
    e.preventDefault()
    const {
      titleInput,
      amountInput,
      typeInput,
      totalIncome,
      totalExpenses,
    } = this.state
    const userDetails = {
      id: uuidv4(),
      titleName: titleInput,
      amount: amountInput,
      type: transactionTypeOptions.find(each => each.optionId === typeInput).displayText,
    }
    this.setState(prevState => ({
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
      transactionDetailsList: [
        ...prevState.transactionDetailsList,
        userDetails,
      ],
      totalIncome:
        typeInput === transactionTypeOptions[0].optionId
          ? totalIncome + parseInt(amountInput)
          : totalIncome,
      totalExpenses:
        typeInput === transactionTypeOptions[1].optionId
          ? totalExpenses + parseInt(amountInput)
          : totalExpenses,
    }))
  }

  onDeleteList = id => {
    const {transactionDetailsList,totalIncome, totalExpenses} = this.state
    const deletingTransaction = transactionDetailsList.find(
      each => each.id === id,
    )
    // console.log(deletingTransaction)
    const newTransactionDetailsList = transactionDetailsList.filter(
      each => each.id !== id,
    )
    this.setState(prevState => ({
      ...prevState,
      transactionDetailsList: newTransactionDetailsList,
      totalIncome: transactionTypeOptions[0].displayText === deletingTransaction.type
      ? totalIncome - parseInt(deletingTransaction.amount)
      : totalIncome,
      totalExpenses: transactionTypeOptions[1].displayText === deletingTransaction.type
      ? totalExpenses - parseInt(deletingTransaction.amount)
      : totalExpenses,
    }))
  }

  render() {
    const {
      titleInput,
      amountInput,
      typeInput,
      transactionDetailsList,
      totalIncome,
      totalExpenses,
    } = this.state
    // console.log(titleInput, amountInput, typeInput);
    // console.log(transactionDetailsList)

    return (
      <div className="moneymanager-app-container">
        <div className="money-manager-app">
          <div className="topview-container">
            <h1 className="topview-heading">Hi, Richard</h1>
            <p className="topview-para">
              Welcome back to your
              <span className="topview-sub-para"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
          <div className="transaction-container">
            <form
              className="bottom-left-container"
              onSubmit={e => this.onClickSubmit(e)}
            >
              <h1 className="transaction-title">Add Transaction</h1>
              <label htmlFor="title" className="label-text">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="input-box"
                value={titleInput}
                onChange={event => this.handleChangeTitle(event)}
              />
              <label htmlFor="amount" className="label-text">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input-box"
                value={amountInput}
                onChange={e => this.handleChangeAmount(e)}
              />
              <label htmlFor="type" className="label-text">
                TYPE
              </label>
              <select
                className="input-box"
                value={typeInput}
                id="type"
                onChange={e => this.handleChangeType(e)}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="bottom-right-container">
              <h1 className="transaction-title">History</h1>
              <div className="transaction-table-container">
                <ul className="transaction-list-container">
                  <li className="transaction-list-header">
                    <p className="table-header">Title</p>
                    <p className="table-header">Amount</p>
                    <p className="table-header">Type</p>
                  </li>
                  {/* <TransactionItem /> */}
                  {transactionDetailsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      details={eachTransaction}
                      onDelete={id => this.onDeleteList(id)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
