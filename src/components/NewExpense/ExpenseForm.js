import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const btnAddNewExpense = <button onClick={() => { setIsFormVisible(true); }}>Add New Expense</button>
  
  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
        const newExpenseData = {
          title: enteredTitle,
          amount: parseFloat(enteredAmount),
          date: new Date(enteredDate),
        };
    console.log(newExpenseData);
    if (
      enteredTitle.length > 0 &&
      enteredAmount.length > 0 &&
      enteredDate.length > 0
    ) {
          props.onFormSent(newExpenseData);
    }
    else
      console.log('Fill al required fields.')
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setIsFormVisible(false);
  };

  if (!isFormVisible)
    return btnAddNewExpense;
  else
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={changeTitleHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={changeAmountHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={changeDateHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            onClick={() => { setIsFormVisible(false); }}>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    );
};

export default ExpenseForm;
