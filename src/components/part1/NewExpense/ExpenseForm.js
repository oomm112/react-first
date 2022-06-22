import './ExpenseForm.css';
import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const [item, setItem] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const addItemHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem((prevState) => {
      return{...prevState, [name]: value};
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const addItemData = {
      ...item
    }
    props.onSaveItemData(addItemData)
    setItem({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controles">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={item.title} name="title" onChange={addItemHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={item.amount} name="amount" min="0.01" step="0.01" onChange={addItemHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date"value={item.date} name="date" min="2022-01-01" max="2022-12-31" onChange={addItemHandler}/>
          </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
