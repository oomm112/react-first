import {useNavigate} from 'react-router-dom';
import ExpensesList from './components/part1/ExpensesList';
import NewExpense from './components/part1/NewExpense/NewExpense';
import ExpenseFilter from './components/part1/ExpenseFilter';
import ExpensesChart from './components/part1/ExpensesChart';
import Card from './components/part1/UI/Card.js'
import React, {useState} from 'react';
import './components/part1/Expenses.css'

function Part1(){
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [filteredYear, setFilteredYear] = useState('2020');
  const addItemListHandler = itemData => {
    let date = itemData.date;
    let valueArr = date.split('-');
    date = new Date(valueArr[0], valueArr[1]-1, valueArr[2]);

    itemData.date = date;
    setExpenses((prevExpenses) => {
      return [itemData,...expenses];
    });
  }

  const onChangeYearOption = year =>{
    setFilteredYear(year);
  }

  const filterExpenses = expenses.filter(expense => expense.date.getFullYear() == filteredYear);

  return(
    <div>
      <Card className='expenses'>
      <NewExpense onAddItem={addItemListHandler}/>
        <ExpenseFilter selected={filteredYear} onChangeFilter={onChangeYearOption}/>
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
        ))
      }
      </Card>
    </div>
  );
}

export default Part1;
