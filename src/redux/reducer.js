//Initial state of the Redux store
const initialState = {
  todos: [],
};

//Reducer function that manages state changes based on dispatched actions
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //Action type for adding a new todo
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    //Action type for deleting a todo
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    //Action type for editing a todo
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ), //Updating a todo based on its ID
      };
    //Action type for marking a todo as completed
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ), //Marking a todo as completed based on its ID
      };

    //Default case for handling unknown action types
    default:
      return state;
  }
};

export default todoReducer;
