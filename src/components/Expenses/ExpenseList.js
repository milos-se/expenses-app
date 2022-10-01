import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const noExpenseVar = (
    <h2 className="expenses-list__fallback">No expense found</h2>
  );

  if (props.filteredExpenses.length === 0) return noExpenseVar;


  const dispayFilteredItems = () => (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return dispayFilteredItems();
};

export default ExpenseList;
