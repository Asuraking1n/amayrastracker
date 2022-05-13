import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {HabitProvider} from './context/habit-context'
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <HabitProvider>
    <App />
    </HabitProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
