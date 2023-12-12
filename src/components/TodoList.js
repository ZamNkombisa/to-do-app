//Importing React library for creating React components
import React from "react";

//Importing the useSelector hook from react-redux to access the Redux state
import { useSelector } from "react-redux";

//Importing the TodoItem component
import TodoItem from "./TodoItem";

//Functional component representing the list of todos
const TodoList = () => {
  //Using useSelector to access the 'todos' array from the Redux state
  const todos = useSelector((state) => state.todos);

  //Rendering the list of todos using the TodoItem component
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

//Exporting the TodoList component as the default export
export default TodoList;
