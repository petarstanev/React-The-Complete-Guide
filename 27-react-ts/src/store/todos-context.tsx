import React from "react";
import Todo from "../models/todo";

import { useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todos, updateTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    updateTodos((prevState) => prevState.concat(new Todo(text)));
  };

  const removeTodoHandler = (id: string) => {
    updateTodos((old) => old.filter((x) => x.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
