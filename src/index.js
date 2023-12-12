//Importing React and ReactDOM libraries for creating and rendering React components
import React from "react";
import ReactDOM from "react-dom";

//Importing Provider from react-redux to provide the Redux store to the entire app
import { Provider } from "react-redux";

//Importing the Redux store from the redux/store file
import store from "./redux/store";

//Importing the main App component
import App from "./App";

//Rendering the main App component wrapped with the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  //Mounting the app in the HTML element with the id 'root'
  document.getElementById("root")
);
