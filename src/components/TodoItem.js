import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "../redux/actions";
import "./TodoItem.css";

//Functional component representing a single todo item
const TodoItem = ({ todo }) => {
  //Accessing the dispatch function from the Redux store
  const dispatch = useDispatch();

  //Handling the delete todo action
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  //Handling the edit todo action
  const handleEdit = () => {
    //Prompting the user to edit the todo text
    const updatedText = prompt("Edit todo:", todo.text);
    if (updatedText) {
      //Dispatching the edit todo action with the updated text
      dispatch(editTodo({ ...todo, text: updatedText }));
    }
  };

  //Handling the complete todo action
  const handleComplete = () => {
    //Dispatching the complete todo action
    dispatch(completeTodo(todo.id));
  };

  //Rendering the todo item with buttons for edit, delete, and complete
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {!todo.completed && <button onClick={handleComplete}>Complete</button>}
    </div>
  );
};

//Exporting the TodoItem component as the default export
export default TodoItem;
