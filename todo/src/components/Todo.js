import React, { useState, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import actions from "../actions/todoActions";
import { initialValues } from "../reducers/todoReducer";

console.log(initialValues);

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialValues);
  const [newTodoItem, setTodoItem] = useState("");
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  console.log("current state", state.completed);
  return (
    <form>
      <h1 onClick={() => dispatch(actions.toggleCompleted())}>
        {" "}
        {state.item}{" "}
      </h1>
      <input
        type="text"
        name="newTodoItem"
        value={newTodoItem}
        onChange={handleChange}
      />
      <button onClick={() => dispatch(actions.addTodo())}> add </button>{" "}
      <button onClick={() => dispatch(actions.clearCompleted())}> clear</button>
    </form>
  );
};
export default Todo;
