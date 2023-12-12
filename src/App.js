//Importing React library for creating React components
import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css"; //Importing styles from App.css

//Functional component representing the main App
function App() {
  //Rendering the main App structure
  return (
    <div>
      <h1>To do App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

//Exporting the App component as the default export
export default App;
