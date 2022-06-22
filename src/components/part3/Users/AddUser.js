import React, {useState, useRef } from 'react';
import classes from '../css/addUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [user, setUser] = useState(
    {
      username: '',
      age: '',
    }
  );
  const [error, setError] = useState(false);

  const onSubmitHandler = (e) => {
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    e.preventDefault();
    setUser({
      ...user,
      username: name,
      age: age
    });

    /* null check */
    if(user.username == null || user.username == ''){
        setError({
          title: 'Invalid Input',
          message: 'Pleaese enter a valid name(non-empty values)'
        });
        return;
    }
    if(user.age == null || user.age < 1){
      setError({
        title: 'Invalid Input',
        message: 'Pleaese enter a valid age(non-empty values)'
      });
        return;
    }

    props.onSaveUsers(user);
  };

  const errorHandler = () => {
    setError();
  }

  return(
    <Card className={classes.input}>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text"/>
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number" min="1" step="1" max="140"/>
          <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
