//Action creator for adding a new todo
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo, //The todo object to be added
});

//Action creator for deleting a todo
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id, //The ID of the todo to be deleted
});

//Action creator for editing a todo
export const editTodo = (todo) => ({
  type: "EDIT_TODO",
  payload: todo, //The updated todo object
});

//Action creator for marking a todo as completed
export const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: id, //The ID of the todo to be marked as completed
});
