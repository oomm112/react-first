import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
 const amountInputRef = useRef();

 const submitHandler = (event) => {
   event.preventDefault();

   const enteredAmount = amountInputRef.current.value;
   const enteredAmountNumber = +enteredAmount;

   if (
     enteredAmount.trim().length === 0 ||
     enteredAmountNumber < 1 ||
     enteredAmountNumber > 5
   ) {
     setAmountIsValid(false);
     return;
   }

   props.onAddToCart(enteredAmountNumber);
 };

  return(
    <form onSubmit={submitHandler} className={classes.form}>
      <Input name="amount" ref={amountInputRef}
       label="Amount" id={props.id} input={{
        type: "number",
        min: "1",
        step: "1",
        defaultValue: "1"
      }}/>
      <button> + Add </button>
    </form>
  );
};

export default MealItemForm;
