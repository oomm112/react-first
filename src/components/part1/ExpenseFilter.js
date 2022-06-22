import './ExpenseFilter.css';
import React, {useState} from 'react'

const ExpenseFilter = (props) => {
  let yearList = [];
  const onChangeYearHandler = (e) => {
    const year = e.target.value;
    props.onChangeFilter(year);
  };

  function Years(index) {
    let year = new Date().getFullYear();
    for (let i = index; i > 0; i--) {
      yearList = [...yearList, year];
      year--;
    }
  }

  function CreateOption(){
    Years(7);
    return(
      <>
      {yearList.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
      </>
    );
    console.log(yearList);
  }

  return(
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeYearHandler} value={props.selected}>
          <CreateOption />
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
