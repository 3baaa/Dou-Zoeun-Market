import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Cookies } from "react-cookie";
import "./index.css";

const cookies = new Cookies();
let getAuthInfo = null;
const cookie = cookies.get("authCookie");

if (cookies.get("authCookie") != null) {
  getAuthInfo = cookies.get("authCookie");
} else {
  getAuthInfo = { isTrue: false };
}
//const auth = window.location.search;

function reducer(state = getAuthInfo, action) {
  return state;
}
let store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
