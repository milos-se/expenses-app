
import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const formSentHandler = (data) => {
        // console.log('Message from NewExpense component !')
        // console.log(data);
      const item = {
        id: Math.round((Math.random() * 1000)).toString(),
        ...data
      };  
      props.onSave(item);
    };

    return (
      <div className="new-expense">
        <ExpenseForm onFormSent={formSentHandler} />
      </div>
    );
}




export default NewExpense
