import React, { useState, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import actions from "../actions/todoActions";
import { initialValues } from "../reducers/todoReducer";

console.log(initialValues);

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialValues);

  return (
    <form>
      <h1> {initialValues.item} </h1>
      <button> add </button> <button> clear</button>
    </form>
  );
};
export default Todo;
