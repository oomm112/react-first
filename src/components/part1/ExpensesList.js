import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  return (
    <ul className="expenses-list">
    {props.items.length == 0 && <p className="expenses-list__fallback">No Expenses Found. </p>}
    {props.items.length > 0 && props.items.map((expense) => (
      <ExpenseItem item={expense} key={expense.id}/>))
    }
    </ul>
  );
}

export default ExpensesList;
