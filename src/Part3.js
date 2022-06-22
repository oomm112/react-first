import React, {useState} from 'react';
import AddUser from './components/part3/Users/AddUser';
import UserList from './components/part3/Users/UserList';

const Part3 = () => {
  const [userList, setUserList] = useState([]);
  const onSaveUsersHandler = (user) => {
    const userData = {
      ...user
    }
    setUserList([...userList, userData]);
  };

  return(
    <div>
      <AddUser onSaveUsers={onSaveUsersHandler}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default Part3;
