import React from 'react';
import classes from './Header.module.css';
import mealsImg from "../components/ReactMeals/assets/meals.jpg";
import HeaderButton from '../components/ReactMeals/UI/HeaderButton';

const ReactMealHeader = (props) => {
  return(
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onConfirm={props.onConfirm}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!'/>
      </div>
    </>
  );
};

export default ReactMealHeader;
