import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../src/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";
const root=ReactDOM.createRoot( document.getElementById("root"));
root.render(
<BrowserRouter>
<Provider store ={store}>
    <App />
</Provider>
</BrowserRouter>
);

