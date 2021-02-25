export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export default {
  addTodo: (todo) => {
    console.log("adding a todo to list");
    return { type: ADD_TODO, payload: todo };
  },
  toggleCompleted: () => {
    console.log("toggling todo list ");
    return { type: TOGGLE_COMPLETED };
  },
  clearCompleted: () => {
    console.log("clearing todo to list");
    return { type: CLEAR_COMPLETED };
  },
};
