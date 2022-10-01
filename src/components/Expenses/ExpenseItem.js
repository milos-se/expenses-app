import React from 'react'

import './ExpenseItem.css'
import Card from "../UI/Card";

import ExpenseDate from './ExpenseDate'
   
const ExpenseItem = (props) => {

  //const [counter, setCounter] = useState(gv_counter);

  // const changeTitleHandler2 = () => {
  //   gv_counter += 1;
  //   setCounter(gv_counter);
  //   console.log(counter);
  // };


  //setInterval(func, 2000);
//  useEffect(() => {
//    setInterval(() => {
//      changeTitleHandler2();
//    }, 3000);
//  }, []);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
