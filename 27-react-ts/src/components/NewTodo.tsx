import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    context.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text-input">Todo text</label>
      <input type="text" id="text-input" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
