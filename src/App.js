import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let initialExpenses = [
  {
    id: "e1",
    title: "LSD",
    amount: 300.12,
    date: new Date(2020, 2, 14),
  },
  {
    id: "e2",
    title: "Marihuana",
    amount: 800.49,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e3",
    title: "Laos boy",
    amount: 500.67,
    date: new Date(2022, 2, 2),
  },
  {
    id: "e4",
    title: "Mushrooms",
    amount: 420.8,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 700.8,
    date: new Date(2020, 4, 12),
  },
  {
    id: "e6",
    title: "Chair and Desk",
    amount: 650.8,
    date: new Date(2021, 9, 12),
  },
  {
    id: "e7",
    title: "Kitchen",
    amount: 920.8,
    date: new Date(2022, 6, 12),
  },
  {
    id: "e8",
    title: "Mobile Telefon",
    amount: 280.8,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e9",
    title: "Computer",
    amount: 640.8,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e10",
    title: "Hologram",
    amount: 720.8,
    date: new Date(2019, 6, 12),
  },
  {
    id: "e11",
    title: "Arc Warden",
    amount: 1020.8,
    date: new Date(2019, 6, 12),
  },
];

const App = () => {
  const [expenses, setExpenseItems] = useState(initialExpenses);

  //return React.createElement('div', {}, React.createElement(Expenses));
  const addNewItemHandler = (item) => {
    // console.log('Message from App component !')
    // console.log(newItem)
    setExpenseItems((oldExpenses) => {
      let itemArray = [item, ...oldExpenses];
      //console.log(itemArray);
      return itemArray;
    });
  };
  return (
    <div>
      <NewExpense onSave={addNewItemHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
