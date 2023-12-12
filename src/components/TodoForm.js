//Importing React library for creating React components
import React, { useState } from "react";

//Importing useDispatch hook from react-redux to dispatch actions to the Redux store
import { useDispatch } from "react-redux";

//Importing the addTodo action creator from the redux/actions file
import { addTodo } from "../redux/actions";

//Importing styles from TodoForm.css file
import "./TodoForm.css";

//Functional component representing the form for adding new todos
const TodoForm = () => {
  //Accessing the dispatch function from the Redux store
  const dispatch = useDispatch();

  //Using the useState hook to manage the state of the new todo input
  const [newTodo, setNewTodo] = useState("");

  //Handling the addition of a new todo
  const handleAddTodo = () => {
    //Checking if the new todo input is not empty or contains only spaces
    if (newTodo.trim() !== "") {
      //Dispatching the addTodo action with a new todo object
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      //Clearing the new todo input after adding a todo
      setNewTodo("");
    }
  };

  //Rendering the input field and add todo button
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add To do</button>
    </div>
  );
};

//Exporting the TodoForm component as the default export
export default TodoForm;
