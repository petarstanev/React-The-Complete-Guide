import User from './User'
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <ul className={styles['user-list']}>
      {props.users.map(user => <User id={user.id} name={user.name} age={user.age} />)}
    </ul>
  );
};

export default UserList;
