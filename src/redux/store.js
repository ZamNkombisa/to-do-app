//Importing the createStore function from Redux
import { createStore } from "redux";

//Importing the todoReducer from the reducer file
import todoReducer from "./reducer";

//Creating a Redux store by passing the todoReducer to createStore
const store = createStore(todoReducer);

//Exporting the created store as the default export
export default store;
