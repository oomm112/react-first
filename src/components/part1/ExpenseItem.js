import {useNavigate} from 'react-router-dom';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card.js'
import React, {useState} from 'react'

function ExpenseItem(props){
  const [title, setTitle] = useState(props.item.title);

  return(
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.item.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
