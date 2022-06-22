import Card from '../UI/Card';
import classes from '../css/UserList.module.css';

const UserList = props => {
  return(
    <Card className={classes.Input}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.username}>
            {user.username}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
