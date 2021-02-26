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
  const handleDispatch = (e, action) => {
    e.preventDefault();
    dispatch(action);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="newTodoItem"
          value={newTodoItem}
          onChange={handleChange}
        />
        <button
          onClick={(e) => handleDispatch(e, actions.addTodo(newTodoItem))}
        >
          {" "}
          add{" "}
        </button>{" "}
        <button onClick={(e) => handleDispatch(e, actions.clearCompleted())}>
          {" "}
          clear
        </button>
      </form>

      {state.map((todo) => {
        return (
          <h1
            onClick={() => dispatch(actions.toggleCompleted(todo))}
            key={todo.id}
          >
            {" "}
            {todo.item}{" "}
          </h1>
        );
      })}
      {/* c*/}
    </div>
  );
};
export default Todo;
