import React, { useState } from "react";

import "./Expenses.css";

//import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";

const Expenses = (props) => {

  const expenseItems = props.items;

  //const [expenseItems, setExpenseItems] = useState(props.items);
  // const [filteredItems, setFilteredItems] = useState(expenseItems);
  const [filteredYear, setFilteredYear] = useState("All");

    const filteredItems =
      filteredYear === "All"
        ? expenseItems
        : expenseItems.filter(
            (it) => it.date.getFullYear() === parseInt(filteredYear)
      );

  // const filterItems = (filteredYear) => {
  //   console.log("filterItems");
  //   if (filteredYear === "All") return expenseItems;
  //   else
  //     return expenseItems.filter(
  //       (it) => it.date.getFullYear() === parseInt(filteredYear)
  //     );
  // };


  const changeFilterHandler = (filteredYear) => {
    // console.log(
    //   "Filtered year: " + filteredYear + " type: " + typeof filteredYear
    // );
    setFilteredYear(filteredYear);
  };

  // const dispayFilteredItems = () =>
  //   filteredItems.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       date={item.date}
  //       amount={item.amount}
  //     />
  //   ));

  return (
    <Card className="expenses">
      <ExpenseFilter
        pickedYear={filteredYear}
        onYearChange={changeFilterHandler}
      />
      <ExpenseChart expenses={filteredItems} />
      <ExpenseList filteredExpenses={filteredItems} />
      {/* {dispayFilteredItems()} */}
    </Card>
  );
};

export default Expenses;
