
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const ExpenseYear = props.date.getFullYear();
    const ExpenseMonth = props.date.toLocaleString("en-US", { month: "long" });
    const ExpenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
    return (
      <div className="expense-date">
        <div className="expense-date__month">{ExpenseMonth}</div>
        <div className="expense-date__year">{ExpenseYear}</div>
        <div className="expense-date__day">{ExpenseDay}</div>
      </div>
    );
}

export default ExpenseDate;