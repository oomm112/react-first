import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react'

const NewExpense = (props) => {
  const [isVisisble, setIsVisisble] = useState(false);
  const saveItemDataHandler = (addItemData) => {
    const itemData = {
      id: Math.random().toString(),
      ...addItemData
    }
    props.onAddItem(itemData);
  };

  const invisibleForm = () => {
    if(isVisisble){
      setIsVisisble(false);
    }
  };

  const visibleForm = () => {
    if(!isVisisble){
      setIsVisisble(true);
    }
  };

  return (
    <div className="new-expense">
      {!isVisisble && <button onClick={visibleForm}>Add New Expense</button>}
      {isVisisble && <ExpenseForm onSaveItemData={saveItemDataHandler} onCancel={invisibleForm}/>}
    </div>
  );
};

export default NewExpense;
