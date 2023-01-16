import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {context.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onTodoRemoved={context.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
