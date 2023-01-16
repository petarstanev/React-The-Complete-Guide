import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onTodoRemoved: () => void;
}> = (props) => {
  const closeButtonHandler = () => {
    props.onTodoRemoved();
  };

  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={closeButtonHandler}>X</button>
    </li>
  );
};

export default TodoItem;
