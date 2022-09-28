import styles from './User.module.css'

const User = (props) => {
  return <li className={styles['user']} key={props.id}>{`${props.name} (${props.age} years old)`}</li>;
};

export default User;
