import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");


ReactDOM.render(
  <div>
    <div className="Intro">
        <p>KEEP TRACK OF ALL YOUR EXPENSES HERE </p>
        <p>Press any item to delete it </p>
    </div>
        <TodoList/>
        </div>,
    destination
);
